const path = require('path');
const express = require('express');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../static')));
    const bodyParser = express.urlencoded({extended: false});
    app.use(bodyParser);
}

module.exports = expressConfig;