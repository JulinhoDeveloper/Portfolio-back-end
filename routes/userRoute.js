const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middlewares/auth');



//registro
router.post('/register', userCtrl.registerUser);

//login
router.post('/login', userCtrl.loginUser);


//verifica o token
router.get('/verify', userCtrl.verifiedToken);

module.exports = router;