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

/**
 * @swagger
 * /api/v1/places:
 *   get:
 *     summary: Get a list of all places
 *     tags: [Places]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               error:
 *                 message: "Bad Request"
 */
// Route to get all places
router.get('/', getPlaces);

/**
 * @swagger
 * /api/v1/places:
 *   post:
 *     summary: Create a new place
 *     tags: [Places]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Place created
 *       400:
 *         description: Error in creating place
 */
// Route to create a new place
router.post('/', createPlace);

/**
 * @swagger
 * /api/v1/places/{id}:
 *   get:
 *     summary: Get a single place by ID
 *     tags: [Places]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the place to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Place not found
 */
// Route to get a specific place by ID
router.get('/:id', getPlace);

/**
 * @swagger
 * /api/v1/places/{id}:
 *   put:
 *     summary: Update a place by ID
 *     tags: [Places]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the place to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful update
 *       404:
 *         description: Place not found
 */
// Route to update a place by ID
router.put('/:id', updatePlace);

/**
 * @swagger
 * /api/v1/places/{id}:
 *   delete:
 *     summary: Delete a place by ID
 *     tags: [Places]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the place to delete
 *     responses:
 *       200:
 *         description: Successful deletion
 *       404:
 *         description: Place not found
 */
// Route to delete a place by ID
router.delete('/:id', deletePlace);

// Export the router
module.exports = router;
