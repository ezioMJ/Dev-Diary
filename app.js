import dotenv from "dotenv";
import express from "express";
import expressLayout from "express-ejs-layouts";
import mainRouter from './server/routes/main.js';
import connectDB from "./server/config/db.js";
import admin from "./server/routes/admin.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import methodOverride from 'method-override';

dotenv.config();
const app = express();
const PORT = 3000 || process.env.PORT

connectDB();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    }),
  }));
app.use(express.static("public"));
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use("/", mainRouter);
app.use("/", admin);

app.listen(PORT, ()=>{
    console.log(`App running on PORT ${PORT}`);
});