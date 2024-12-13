# REST API with Authentication
This is a simple REST API built with ExpressJS and MongoDB, providing basic user authentication. It also supports seeding default data to MongoDB.

## Features
- User authentication with JWT (JSON Web Token)
- MongoDB as the database
- Seed default data for users

## Technologies Used
- **ExpressJS**: A fast, unopinionated web framework for Node.js
- **MongoDB**: NoSQL database for storing user and other data
- **JWT**: Token-based authentication for secure user sessions

## Installation
### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

### 2. Install Dependencies
Run the following command to install the necessary dependencies:
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root of your project. This file will store sensitive information like your MongoDB connection string and secret key for JWT.
```bash
PORT=3000
DB_DRIVER=mongodb
DB_HOST=localhost
DB_PORT=27017
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password
DB_USER=users
TOKEN_SECRET=your-secret-key
```

### 4. Seed Default Data
You can seed the database with default data (e.g., default users) using the following command:
```bash
node ./src/seeders/seeds.js
```

## Running the Project
Once everything is set up, you can run the project using:
```bash
npm run dev
```
This will start the Express server, and the API will be available at http://localhost:3000 by default.

## API Endpoints
### POST `/api/v1/users/register`
- **Description**: Register a new user.
- **Request Body**:
```JSON
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "your-password"
}
```
- **Response**:
  - **200 OK**: User registered successfully.
  - **400 Bad Request**: Invalid input.

### POST `/api/v1/users/login`
- **Description**: RLogin a user and receive a JWT.
- **Request Body**:
```JSON
{
  "email": "user@example.com",
  "password": "your-password"
}
```
- **Response**:
    - **200 OK**: JWT token is returned.
    - **401 Unauthorized**: Incorrect credentials.

### GET `/api/v1/books`
- **Description**: Return a list of books.
- **Response**:
    - **200 OK**: Return list of books.
    - **401 Unauthorized**: Invalid JWT token.
