const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }

    try {
        const shortID = shortid.generate();
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
            createdBy:req.user._id
        });
        // return res.json({ id: shortID });
        return res.render("home", { // Corrected from `res.sender` to `res.render`
            id: shortID, // Corrected from `shortId` to `shortID` to match variable name
        });
    } catch (err) {
        console.error('Error generating short URL:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortId; // Ensure you're accessing the correct parameter
    const result = await URL.findOne({ shortId: shortID }); // Corrected to match field name `shortId`
    if (!result) {
        return res.status(404).json({ error: 'URL not found' });
    }
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
};
