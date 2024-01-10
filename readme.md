# README

## Server Architecture

![image](/serverArch.png)
[Link](/serverArch.png)

## Project Setup

Clone the repository:

```bash
git clone https://github.com/suyash200/Author-Assignment.git
cd ./Author-Assignment
```

Install dependencies:

```bash
npm install

```

Create a .env file:

database=authorCrud
Db_Name=postgres
Db_Password=your_database_password
Db_Host=your_database_host
Jwt_Secret=your_jwt_secret

## Database Setup

Create the database:

Create a PostgreSQL database with the name specified in DB_NAME.
Run migrations:

```bash
npm run migrate
Use code with caution. Learn more
Seed the database:
```

```bash
npm run seed
Use code with caution. Learn more
```

## Starting the Server

```bash
npm start
Use code with caution. Learn more
```

## API Endpoints

### Author Endpoints (Public)

POST /api/authors/register - Register a new author
POST /api/authors/login - Login an author

### Author Endpoints (Private, Requires Authentication)

GET /api/authors - Get all authors with their book count
GET /api/authors/me - Get the details of the logged-in author
GET /api/authors/:id - Get details of an author with their books
PUT /api/authors/:id - Update an author
DELETE /api/authors/:id - Delete an author

### Books Endpoints (Private, Requires Authentication)

GET /api/books - Get all books (paginated, with sorting options for likes)
GET /api/books/:id - Get details of a book
POST /api/books - Create a new book
PUT /api/books/:id - Update a book
DELETE /api/books/:id - Delete a book
PUT /api/books/like/:id - Like a book
PUT /api/books/unlike/:id - Unlike a book

## Authentication

JWT-based authentication is used.
Login to obtain a JWT token.
Include the JWT token in the Authorization header of subsequent requests to access protected endpoints.

## Additional Features

Model associations using Sequelize
Data validation
Error handling
Pagination and sorting for books endpoint
Unique likes per user

## Postman

link for postman workspace
[PostMan](https://www.postman.com/inmyevent/workspace/authorcrud/collection/25009364-aa3a1553-5dc5-4969-a427-0e266e06595b?action=share&creator=25009364)
