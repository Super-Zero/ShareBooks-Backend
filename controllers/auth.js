const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();
const User = models.User;

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
  res.json({
      //user_id: req.user.id,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      phone: req.user.phone,
      school: req.user.school

    //msg: "Success"

    

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

