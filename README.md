
[![DALLE2024-03-0402-05-23-Designahyper-realisticlogoforawebapplicationfocusedonsocialmediareferenceagg.png](https://i.postimg.cc/LXXSQNyh/DALLE2024-03-0402-05-23-Designahyper-realisticlogoforawebapplicationfocusedonsocialmediareferenceagg.png)](https://postimg.cc/WDQxh6cP)
# Link Me - Social Media Reference Landing Page
Link Me is a free social media reference landing page, developed as part of my learning journey. It provides users with a platform to create a personalized landing page featuring their social media references. Users can sign up using their email, set a password, and share their social media links. The platform generates a unique card for each user, showcasing their social media names and links. Visitors can easily navigate to the user's social media profiles by clicking on the references.

## Tech Stack

### Backend

- **Express.js:** A minimal and flexible Node.js web application framework.
- **Nodemon:** Utility that monitors for changes in your source code and automatically restarts your server.
- **Mongoose:** Elegant MongoDB object modeling for Node.js.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing in Express.js.
- **Zod:** TypeScript-first schema declaration and validation library.
- **Bcrypt:** Library for hashing passwords.

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **React Router DOM:** Declarative routing for React.js.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
- **Axios:** Promise-based HTTP client for the browser and Node.js.


## Installation

Install my-project with npm

```bash
  git clone https://github.com/maruf-rahman007/Link-it.git
```
```bash
  cd link-me/backend
```
```bash
  npm install
```
#### Set up your MongoDB database and configure the connection in backend/config.js.
```bash
  const MONGODB_URL = "yourmongourl"
  const JWT_SECRET = "yoursecreat"
  module.exports = {
    MONGODB_URL,
    JWT_SECRET
  }
```
Go To a New Terminal
```bash
  cd link-me/frontend/frontend
```
```bash
  npm install
```
```bash
  npm rundev
```
## FAQ

#### What is Link Me? 

**Link Me** is a social media reference landing page where users can sign up and share their social media links. The platform generates a card with the references to social media names and links.

#### How can I contribute to Link Me?

Contributions are welcome! Feel free to open issues for bug reports or new features. You can also submit pull requests to contribute directly to the project.

#### What technologies does Link Me use?

Link Me uses Express.js, MongoDB, React, Tailwind CSS, Axios, and other technologies. Check the documentation for a detailed list of libraries and tools.

#### Can I customize the design of the landing page?

Certainly! The frontend is built with React and Tailwind CSS, making it easy to customize the design according to your preferences.


## Feedback

If you have any feedback, please reach out to us at marufrahman.dev@gmail.com


## Authors

- [Maruf Rahman](https://github.com/maruf-rahman007)

