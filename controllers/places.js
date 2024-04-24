
// @desc                Get all places
// @route               GET /api/v1/places
// @access              Public
exports.getPlaces = (req, res, next) => {
    return res.status(200).json({success: true, msg: "Show all places"})

}




// @desc                Get Single place
// @route               GET /api/v1/places/:id
// @access              Public
exports.getPlace = (req, res, next) => {
    return res.status(200).json({success: true, msg: `Show a single place ${req.params.id}`})

}




// @desc                Create new place
// @route               POST /api/v1/places
// @access              Public
exports.createPlace = (req, res, next) => {
    return res.status(201).json({success: true, msg: "create new places"})

}


// @desc                Update new place
// @route               PUT /api/v1/places/:id
// @access              Public
exports.updatePlace = (req, res, next) => {
    return res.status(200).json({success: true, msg: `Display bootcamp ${req.params.id}`})

}



// @desc                Delete place
// @route               DELETE /api/v1/places/:id
// @access              Public
exports.deletePlace = (req, res, next) => {
    return res.status(200).json({success: true, msg: `Display bootcamp ${req.params.id}`})

}



