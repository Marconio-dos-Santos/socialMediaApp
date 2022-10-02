[EJS]: https://ejs.co/
[jsdom]: https://github.com/jsdom/jsdom

[![Website](https://img.shields.io/website?url=https://sociall-media-app.herokuapp.com&label=Website)](https://sociall-media-app.herokuapp.com/)
# [Social Media App](https://github.com/Marconio-dos-Santos/socialMediaApp/)

**Link to project:** https://sociall-media-app.herokuapp.com/

> This project is ongoing Active development.


## How It's Made:

A Simple App built using `EJS` a simple templating language that lets you generate HTML markup with plain JavaScript.
MVC Architecture,  Authentication with `Passport` middleware, and `Bcrypt` A library to help you hash passwords so folx can sign up.
.

**Tech used:** `HTML`, `CSS`, `JavaScript`, `Express`, `Node.js`, `MongoDB`, `Mongoose`, `EJS`, `Tailwind`, `Bootstrap`, `Cloudinary`, `Multer`, `Nodemon`, `Passport`, `bcrypt`...


## Database Setup

- Create a `.env` file in `config folder` and add the following as `key = value`
  - PORT = 2121 (this should be set to `http://localhost:2121/` currently). 
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`


### As this is a Node.js project, after cloning run npm install to install all the required dependencies.


```shell
npm install

```

## Available Scripts

In the project root directory, you can run:

```shell
npm start

```
## Folder Structure

```
└── config
└── controllers
└── middleware
└── models
└── routes
└── views
    └── partials
└── public
    └── css
    ├── imgs

```
### Sign up
![ezgif-5-9740578eaf](https://user-images.githubusercontent.com/96023865/193438901-bef14c6d-43c6-40e1-b913-f65ff95c8ada.gif)
### Post
![ezgif-5-d6e674eabb](https://user-images.githubusercontent.com/96023865/193438902-8a13c5c1-b596-4f7a-bead-2f3b1ccbebde.gif)
## Delete
![ezgif-5-de943aefd7](https://user-images.githubusercontent.com/96023865/193438903-5417f476-740d-4de0-905e-ecf654a4e28c.gif)
### Put
![ezgif-5-853c1c49fc](https://user-images.githubusercontent.com/96023865/193438906-a62b7c03-6839-4e8b-b934-b34d6e13088f.gif)
