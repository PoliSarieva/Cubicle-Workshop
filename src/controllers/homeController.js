const express = require('express');
const cubeManager = require('../managers/cubeManager');

const router = express.Router();

router.get('/', (req, res) => {
    const { search, from, to } = req.query;

    const cubes = cubeManager.getAll(search,from,to);
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;