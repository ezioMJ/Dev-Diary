# Dev-Diary a Full-Stack Web Application created using Node.js, Express.js and MongoDB 
## Features of Dev-Diary 
### For Creators:
     It has Admin panel where the Creator can Register using Username and Password.
     To access Admin Panel they can Sign In using their Credentials.
     Once Signed In they can Create New Blog post, Edit already created post and delete it.
### For Users:
     They can View the Blogs posted by the Admin.
     Has a search bar where they can search blogs using keywords.
## Images of Dev-Diary WebApp
![Screenshot 2024-07-07 205628](https://github.com/ezioMJ/Dev-Diary/assets/136567243/a4345bdb-d717-4c07-a97d-be24572e682f)
![Screenshot 2024-07-07 212237](https://github.com/ezioMJ/Dev-Diary/assets/136567243/1775ebec-c8fd-4273-84ce-7f5eaf235735)
![Screenshot 2024-07-07 212400](https://github.com/ezioMJ/Dev-Diary/assets/136567243/8ca63731-a7e7-4153-93e7-44b2a4047670)
![Screenshot 2024-07-07 212456](https://github.com/ezioMJ/Dev-Diary/assets/136567243/e7f77639-efb7-4b1f-84ed-1630af9d4b11)

## You Need
      NodeJS
      Database MongoDB Cluster
## Create .env File
### Inside .env use the MongoDB url to store the data (Sample Below)
    MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog
    JWT_SECRET=MySecretBlog
## Installation 
### To install and run this project - install dependencies using npm and then start your server:
     npm i 
     npm run dev 
