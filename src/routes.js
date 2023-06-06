const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createController = require('./controllers/cubeController');
const accessoryController = require('./controllers/acccessoryController');
const userController = require('./controllers/userController');

router.use(homeController);
router.use('/cubes', createController);
router.use('/accessories', accessoryController);
router.use('/user', userController);
router.get('*', (res, req) => {
    req.render('404');
});

module.exports = router;