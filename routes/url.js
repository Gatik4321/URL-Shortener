const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics } = require('../controllers/url');
const router = express.Router();

// POST route for generating a new short URL
router.post("/", handleGenerateNewShortURL);

// GET route for fetching analytics of a short URL by shortId
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;
