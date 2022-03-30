const express = require('express');
const router = express.Router();

const { submissions } = require('../models');

router.post('/add-submission', async(req, res) => {
    const { 
        submitterName, 
        email,
        filmTitle, 
        filmGenre, 
        releaseYear, 
        filmRuntime, 
        country, 
        filmLink, 
        filmTrailerLink, 
        filmImages, 
        filmDescription, 
        bio, 
        cedits, 
        behindTheScenesLink, 
        websiteLink, 
        youtubeLink, 
        instragramLink,
        twitterLink,
        tiktokLink  
    } = req.body;
    submissions.create({
        submitterName: submitterName
    });
    res.send('Film submitted');
});

module.exports = router;