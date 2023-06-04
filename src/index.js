const express = require('express');
const app = express();

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');

const dbConnect = require('./config/dbConfig');

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB connect sucessfully'))
    .catch(err => {
        console.log('DB Error ', err);
    });

app.use(routes);

app.listen(5000, () => console.log('Server is running on port 5000'));