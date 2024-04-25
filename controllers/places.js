const path = require('path')
const ErrorResponse = require('../utils/errorResponse')
const Place = require('../models/PlaceModel')
const asyncHandler = require('../middleware/async')

// @desc                Get all places
// @route               GET /api/v1/places
// @access              Public
// eslint-disable-next-line no-unused-vars
const getPlaces = asyncHandler(async (req, res, next) => {
  const places = await Place.find()
  return res.status(200).json({ success: true, count: places.length, data: places })
})

// @desc                Get Single place
// @route               GET /api/v1/places/:id
// @access              Public
const getPlace = asyncHandler(async (req, res, next) => {
  const place = await Place.findById(req.params.id)
  if (!place) {
    return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404))
  }
  return res.status(200).json({ success: true, data: place })
})

// @desc                Create new place
// @route               POST /api/v1/places
// @access              Public
// eslint-disable-next-line no-unused-vars
const createPlace = asyncHandler(async (req, res, next) => {
  const place = await Place.create(req.body)
  return res.status(201).json(
    {
      success: true,
      data: place
    })
})

// @desc                Update new place
// @route               PUT /api/v1/places/:id
// @access              Public
const updatePlace = asyncHandler(async (req, res, next) => {
  const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if (!place) {
    return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404))
  }
  return res.status(200).json({ success: true, data: place })
})

// @desc                Delete place
// @route               DELETE /api/v1/places/:id
// @access              Public
const deletePlace = asyncHandler(async (req, res, next) => {
  const place = await Place.findByIdAndDelete(req.params.id)
  if (!place) {
    return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404))
  }
  return res.status(204).json({ success: true, data: {} })
})

// @desc                Upload photo for place
// @route               PUT /api/v1/places/:id/photo
// @access              Public
const placePhotoUpload = asyncHandler(async (req, res, next) => {
  const place = await Place.findById(req.params.id)
  if (!place) {
    return next(new ErrorResponse(`Place not found with id of ${req.params.id}`, 404))
  }
  if (!req.files) {
    return next(new ErrorResponse('Please upload a file', 404))
  }
  const file = req.files.file
  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse('Please upload an image file', 400))
  }
  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400))
  }
  file.name = `photo_${place._id}${path.parse(file.name).ext}`
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err)
      return next(
        new ErrorResponse(
          'Problem with file upload',
          400
        )
      )
    }
    await Place.findByIdAndUpdate(req.params.id, { image: file.name })
    res.status(200).json({
      success: true,
      data: file.name
    })
  })
})

module.exports = {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
  placePhotoUpload
}
