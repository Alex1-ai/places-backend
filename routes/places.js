const express = require('express');

// Import the controller functions
const {
    getPlaces,
    getPlace,
    createPlace,
    updatePlace,
    deletePlace
} = require('../controllers/places');

// Create the router object
const router = express.Router();

router.get('/', getPlaces);

// Route to create a new place
router.post('/', createPlace);


// Route to get a specific place by ID
router.get('/:id', getPlace);


// Route to update a place by ID
router.put('/:id', updatePlace);


// Route to delete a place by ID
router.delete('/:id', deletePlace);

// Export the router
module.exports = router;
