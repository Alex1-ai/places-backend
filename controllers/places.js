const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const ErrorResponse = require('../utils/errorResponse');
const Place = require('../models/PlaceModel');
const asyncHandler = require('../middleware/async');
const { json } = require('express');

// @desc                Get all places
// @route               GET /api/v1/places
// @access              Public
const getPlaces =asyncHandler(async(req, res, next) =>{


        const places = await Place.find();
        return res.status(200).json({success: true, count: places.length, data: places})




});




// @desc                Get Single place
// @route               GET /api/v1/places/:id
// @access              Public
const getPlace = asyncHandler( async(req, res, next)=>{

        const place = await Place.findById( req.params.id);
        if (!place){
            return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404));
        }
        return res.status(200).json({success: true, data: place});



});




// @desc                Create new place
// @route               POST /api/v1/places
// @access              Public
const createPlace = asyncHandler( async(req, res, next) => {

    console.log(req.body);

    // const place = await Place.create(req.body);

    return res.status(201).json(
        {
            success: true,
            // data: place
        })


});






// @desc                Update new place
// @route               PUT /api/v1/places/:id
// @access              Public
const updatePlace = asyncHandler( async(req, res, next) => {

        const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if(!place){
            return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404));

        }
        return res.status(200).json({success: true, data: place})


});



// @desc                Delete place
// @route               DELETE /api/v1/places/:id
// @access              Public
const deletePlace = asyncHandler( async (req, res, next) => {

        const place = await Place.findByIdAndDelete(req.params.id);
        if (!place) {
            return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404));
        }
        return res.status(204).json({ success: true, data: {} });

});


// @desc                Upload photo for bootcamp
// @route               PUT /api/v1/places/:id/photo
// @access              Public
// const updatePlace = asyncHandler( async(req, res, next) => {

//     const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//     });

//     if(!place){
//         return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404));

//     }
//     return res.status(200).json({success: true, data: place})


// });



module.exports = {
    getPlaces,
    getPlace,
    createPlace,
    updatePlace,
    deletePlace
}



