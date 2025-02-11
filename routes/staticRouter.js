const express = require('express');
const URL = require("../models/url");

const router = express.Router();


router.get('/', async (req, res) => {
    if(!req.user) return res.redirect("/login")
    try {
        // Fetch all URLs from the database
        const allurls = await URL.find({createdBy:req.user._id});
        
        // Render the home page with the fetched URLs
        return res.render('home', {
            urls: allurls
        });
    } catch (err) {
        console.error('Error fetching URLs:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Now creating the url for the sogn up waala page
router.get('/signup',(req,res)=>{
      return res.render("signup");
});

router.get('/login',(req,res)=>{
    return res.render("login");
})

module.exports = router;
