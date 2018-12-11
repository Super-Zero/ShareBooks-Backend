const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();
const User = models.user;

router.get('/error', (req, res) => {
  res.sendStatus(401);
})


// router.post('/signup', (req,res) => {
//   User.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     username: req.body.username,
//     email: req.body.email,
//     password_hash: req.body.password,
//   }).then((user) => {
//     res.json({ msg: "user created" });
//     res.statusCode
//   }).catch(() => {
//     res.status(400).json({ msg: "error creating user" });
//   });
// });


//Login function
exports.login = (req, res) => {
  console.log(req.user);
  res.status(200).json({
    user_id: req.user.user_id
  });  
};



// router.post('/login',
//   passport.authenticate('local', { failureRedirect: '/auth/error' }),
//   (req, res) => {
//     res.json({
//       id: req.user.id,
//       firstName: req.user.firstName,
//       lastName: req.user.lastName,
//       email: req.user.email,
//     });
//   });


router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});


router.get('/profile',
  passport.redirectIfNotLoggedIn('/auth/error'),
  (req, res) => {
    res.json({ msg: "This is the profile page for: " + req.user.email });
});


