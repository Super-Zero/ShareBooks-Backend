const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;
const bookController = require('../controllers').books;
const authentification = require('../controllers').auth;
const passport = require('../middlewares/auth');
const libraryController = require('../controllers').mylibrary;
const wantedbooksController = require('../controllers').wantedbooks;


// console.log(authentification);
// console.log(userController);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Users
router.post('/api/signup', userController.create);

//router.get('/api/user/:id', userController.findById);

router.put('/api/user/:id', userController.update);

router.delete('/api/user/:id', userController.delete);

router.post('/api/profile', userController.profile);


// Books
router.post('/api/uploadbooks', bookController.uploadBooks);


// Library
router.post('/api/mylibrary', libraryController.mylibrary);

// Wanted Books
router.post('/api/wantedbooks', wantedbooksController.wantedBooks)

router.get('/api/findbooks', libraryController.findbooks)

//Authentification
router.post('/api/login', 
  passport.authenticate('local', { failureRedirect: '/auth/error' }), 
  authentification.login);



module.exports = router;
