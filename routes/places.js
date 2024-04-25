const express = require('express')
const upload = require('../middleware/uploads')
// Import the controller functions
const {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
  placePhotoUpload
} = require('../controllers/places')

// Create the router object
const router = express.Router()

router.get('/', getPlaces)

// Route to create a new place
router.post('/', upload.single('image'), createPlace)

// Route to get a specific place by ID
router.get('/:id', getPlace)

// Route to update a place by ID
router.put('/:id', updatePlace)

// Route to delete a place by ID
router.delete('/:id', deletePlace)

// Route to update image by ID
router.put('/:id/photo', placePhotoUpload)

// Export the router
module.exports = router
