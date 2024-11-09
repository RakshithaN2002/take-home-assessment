// src/routes/rating.js

const express = require('express');
const router = express.Router();
const ratingsController = require('../controllers/rating');

// Define routes
router.post('/', ratingsController.createRating);
router.get('/', ratingsController.getAllRatings);
router.get('/:id', ratingsController.getRatingById);
router.put('/:id', ratingsController.updateRating);
router.delete('/:id', ratingsController.deleteRating);

// Export the router
module.exports = router;
