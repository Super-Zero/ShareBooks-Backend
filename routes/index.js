const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;
const authentification = require('../controllers').auth;
const passport = require('../middlewares/auth');

console.log(authentification);
console.log(userController);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// User
router.post('/api/signup', userController.create);

router.get('/api/user/:id', userController.findById);

router.put('/api/user/:id', userController.update);

router.delete('/api/user/:id', userController.delete);

//Authentification
router.post('/api/login', 
  passport.authenticate('local', { failureRedirect: '/auth/error' }), 
  authentification.login);



module.exports = router;
