const DB = require("./db/connection");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require("express");
let app = express();
const userroute = require('./routes/userRoutes');

app.use(express.json());
app.use('/data', userroute);

//Connection to start the server
app.listen(3000, () => {
    console.log("server has started...");
})
