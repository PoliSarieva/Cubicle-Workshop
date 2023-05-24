const express = require('express');
const app = express();

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const createController = require('./controllers/cubeController');

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cubes', createController);

app.get('*', (res, req) => {
    req.render('404');
})

app.listen(5000, () => console.log('Server is running on port 5000'));