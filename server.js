const express = require('express');
const swagger = require('./swagger')
const dotenv = require('dotenv');

//Route files
const places = require('./routes/places')


// Load env vars
dotenv.config({ path: "./config/config.env"})




const app = express();


// Mount routers
app.use('/api/v1/places', places)





const PORT = process.env.PORT || 5000;


swagger(app)
app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))