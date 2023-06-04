const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createController = require('./controllers/cubeController');

router.use(homeController);
router.use('/cubes', createController);
router.get('*', (res, req) => {
    req.render('404');
});

module.exports = router;