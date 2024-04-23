const express = require('express');
// const swagger = require('./swagger')
const dotenv = require('dotenv');


// Load env vars
dotenv.config({ path: "./config/config.env"})

const app = express();





const PORT = process.env.PORT || 5000;


// swagger(app)
app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))