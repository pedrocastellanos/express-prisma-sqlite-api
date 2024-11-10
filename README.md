# Prisma API + Express + SQLite
This is an implementation of the JSON Placeholder API using _Prisma ORM_ with _Express_ and _SQLite_

## API

#### Albums
* **GET** /api/albums
* **GET**       /api/albums/:id
* **POST**      /api/albums
* **PUT**       /api/albums/:id
* **DELETE**    /api/albums/:id

#### Users
* **GET** /api/users
* **GET** /api/users/:id
* **POST** /api/users
* **PUT** /api/users/:id
* **DELETE** /api/users/:id

#### Posts
* **GET** /api/posts
* **GET** /api/posts/:id
* **GET** /api/posts/:id/comments
* **POST** /api/posts
* **PUT** /api/posts/:id
* **DELETE** /api/posts/:id

#### Todos
* **GET** /api/todos
* **GET** /api/todos/:id
* **POST** /api/todos
* **PUT** /api/todos/:id
* **DELETE** /api/todos/:id

#### Photos
* **GET** /api/photos
* **GET** /api/photos/:id
* **POST** /api/photos
* **PUT** /api/photos/:id
* **DELETE** /api/photos/:id

#### Comments
* **GET** /api/comments
* **GET** /api/comments/:id
* **POST** /api/comments
* **PUT** /api/comments/:id
* **DELETE** /api/comments/:id    

#### How to run 
Clone the repository
```bash
npm install
npm run dev
```

## How to use
Localy
```bash
curl -X GET http://localhost:3000/api/albums
```
```bash
curl -X GET https://prisma-api.app.pedrocastellanos.xyz/api/
```


