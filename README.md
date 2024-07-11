# Blogging Website

This is a blogging website built with Node.js, Express, and EJS for server-side rendering. Users can sign up, log in, add blogs, comment on blogs, and log out.

## Features

- User authentication (sign up, log in, log out)
- Add, edit, and delete blogs
- Comment on blogs
- Server-side rendering using EJS

## Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- EJS (Embedded JavaScript Templates)
- Passport.js for authentication
- Bootstrap for frontend styling

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/blogging-website.git
    cd blogging-website
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/bloggingWebsite
    SESSION_SECRET=yourSessionSecret
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## Project Structure

