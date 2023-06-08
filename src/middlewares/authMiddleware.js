const jwt = require('../lip/jwt');
const { SECRET } = require('../config/config');

exports.auth =async (req, res, next) => {
    const token = req.cookise['auth'];
    
    if (token) {
        try {
            const user = await jwt.verify(token, SECRET);
            req.user = user;
            
            next();
        } catch (err) {
            res.clearCookie('auth');

            return res.redirect('/users/login');
        }
        
    } else {
    next();
    }
}