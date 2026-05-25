# Post Chat App

A full-stack social feed application where users can create posts, interact with content through likes and comments, and manage their own posts and comments.

---

# Features

* User authentication and authorization
* Create posts to the public feed
* Like and unlike posts
* Add comments to posts
* Delete posts
* Delete comments
* RESTful API integration
* Form validation using Yup and Formik
* Responsive frontend using React and Vite

---

# Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* Axios
* Formik
* Yup

## Backend

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT Authentication
* bcrypt
* CORS

---

# Packages Used

## Server Packages

```bash
npm install express cors mysql2 bcrypt sequelize sequelize-cli jsonwebtoken
```

## Client Packages

```bash
npm install --save-dev vite @vitejs/plugin-react

npm install react react-dom react-router-dom axios formik yup
```

---

# Project Structure

```bash
post-chat-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# Installation Guide

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd post-chat-app
```

---

# Server Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=3001

DB_HOST=localhost
DB_USER=root
# Post Chat App

A full-stack social feed application where users can create posts, interact with content through likes and comments, and manage their own posts and comments.

---

# Features

* User authentication and authorization
* Create posts to the public feed
* Like and unlike posts
* Add comments to posts
* Delete posts
* Delete comments
* RESTful API integration
* Form validation using Yup and Formik
* Responsive frontend using React and Vite

---

# Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* Axios
* Formik
* Yup

## Backend

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT Authentication
* bcrypt
* CORS

---

# Packages Used

## Server Packages

```bash
npm install express cors mysql2 bcrypt sequelize sequelize-cli jsonwebtoken
```

## Client Packages

```bash
npm install --save-dev vite @vitejs/plugin-react

npm install react react-dom react-router-dom axios formik yup
```

---

# Project Structure

```bash
post-chat-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# Installation Guide

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd post-chat-app
```

---

# Server Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=3001

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=postchatdb

JWT_SECRET=your_secret_key
```

Run the server:

```bash
npm start
```

---

# Client Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

---

# API Functionality

## Authentication

* User registration
* User login
* JWT token authentication

## Posts

* Create a post
* View all posts
* Delete a post

## Comments

* Add comments to posts
* Delete comments

## Likes

* Like posts
* Unlike posts

---

# Validation and Security

* Password hashing with bcrypt
* JWT authentication for secure routes
* Form validation using Formik and Yup
* Cross-Origin Resource Sharing enabled with CORS

---

# Future Improvements

* Edit posts and comments
* User profiles
* Upload images to posts
* Real-time notifications
* Dark mode support
* Real-time messaging/chat

---

# Scripts

## Client

```bash
npm run dev
```

Starts the frontend development server.

## Server

```bash
npm start
```

Starts the backend server.

---

# Author

Developed by Mpho Rakgope
DB_NAME=postchatdb

JWT_SECRET=your_secret_key
```

Run the server:

```bash
npm start
```

---

# Client Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

---

# API Functionality

## Authentication

* User registration
* User login
* JWT token authentication

## Posts

* Create a post
* View all posts
* Delete a post

## Comments

* Add comments to posts
* Delete comments

## Likes

* Like posts
* Unlike posts

---

# Validation and Security

* Password hashing with bcrypt
* JWT authentication for secure routes
* Form validation using Formik and Yup
* Cross-Origin Resource Sharing enabled with CORS

---

# Future Improvements

* Edit posts and comments
* User profiles
* Upload images to posts
* Real-time notifications
* Dark mode support
* Real-time messaging/chat

---

# Scripts

## Client

```bash
npm run dev
```

Starts the frontend development server.

## Server

```bash
npm start
```

Starts the backend server.

---

# Author

Developed by Mpho Rakgope
