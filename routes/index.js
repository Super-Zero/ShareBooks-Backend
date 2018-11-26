const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/signup', userController.create);

router.get('/api/user/:id', userController.findById);

router.put('/api/user/:id', userController.update);

router.delete('/api/user/:id', userController.delete);




module.exports = router;
