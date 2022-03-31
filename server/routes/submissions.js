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
        credits, 
        behindTheScenesLink, 
        websiteLink, 
        youtubeLink, 
        instragramLink,
        twitterLink,
        tiktokLink  
    } = req.body;
    submissions.create({
        submitterName: submitterName,
        email: email,
        filmTitle: filmTitle,
        filmGenre: filmGenre,
        releaseYear: releaseYear,
        filmRuntime: filmRuntime,
        country: country,
        filmLink: filmLink,
        filmTrailerLink: filmTrailerLink,
        filmImages: filmImages,
        filmDescription: filmDescription,
        bio: bio,
        credits: credits,
        behindTheScenesLink: behindTheScenesLink,
        websiteLink: websiteLink,
        youtubeLink: youtubeLink,
        instragramLink: instragramLink,
        twitterLink: twitterLink,
        tiktokLink: tiktokLink

    });
    res.send('Film submitted');
});

module.exports = router;