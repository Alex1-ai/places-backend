const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const fileupload = require('express-fileupload')
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
// eslint-disable-next-line no-unused-vars
const colors = require('colors')

const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })
dotenv.config({ path: './.env' })

// Connect to database
connectDB()

// Route files
const places = require('./routes/places')

const app = express()

// Body Parser
app.use(express.json())

// react application build
app.use(express.static(path.join(__dirname, 'public')))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'reactbuild', 'build')))

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// File uploading
app.use(fileupload())

// Sanitize data
app.use(mongoSanitize())

// CORS
app.use(cors())

// Mount routers
app.use('/api/v1/places', places)

// Serve React app for all other routes(fallback)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'reactbuild', 'build', 'index.html'))
})

// using the error handler
app.use(errorHandler)
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

// Handle unhandled promise rejections

// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
