const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a name']
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  open_hours: {
    type: String,
    required: [true, 'Please add a open hour'],
    maxlength: [50, 'open hours can not be more than 50 characters long']
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

})

module.exports = mongoose.model('Place', PlaceSchema)
