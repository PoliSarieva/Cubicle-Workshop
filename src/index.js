const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const cubeManager = require('./managers/cubeManager');

const bodyParser = express.urlencoded({extended: false});
app.use(bodyParser);

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.listen(5000, () => console.log('Server is running on port 5000'));

app.use(express.static(path.resolve(__dirname, 'static')));

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