const express = require('express');
const app = express();
const cubeManager = require('./managers/cubeManager');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

expressConfig(app);
handlebarsConfig(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/create', (req, res) => {
    console.log(cubeManager.getAll());;
    res.render('create');
});

app.post('/create', (req,res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    cubeManager.createCube({name, description, imageUrl, difficultyLevel});
    res.redirect('/');
});


app.listen(5000, () => console.log('Server is running on port 5000'));