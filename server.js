require('dotenv').config();

const http = require('http'); // This line imports the built-in http module from Node.js. This module provides functionalities for creating HTTP servers and clients, which are essential for building web applications.

require('./config/dbConnect') // anytime the server is been run the database is automatically called and the function in it is executed.
const app = require('./app/app');


const PORT = process.env.PORT || 2024;


// ** SERVER
const server = http.createServer(app) //It takes the application logic (app) as an argument, which will be used to handle incoming requests and generate responses.
server.listen(PORT, console.log(`System Sever running is on port ${PORT}`)); 