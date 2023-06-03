const express = require('express');
const cubeManager = require('../managers/cubeManager');

const router = express.Router();

router.get('/',async (req, res) => {
    const { search, from, to } = req.query;

    const cubes =await cubeManager.getAll(search,from,to);
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;