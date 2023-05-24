const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.listen(5000, () => console.log('Server is running on port 5000'));

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('index');
})