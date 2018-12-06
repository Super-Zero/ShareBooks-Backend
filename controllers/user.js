
// const express = require('express');
const models = require('../models');
const db = require('../config/config');
const User = models.Users;


// // Post a user
exports.create = (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(function(user) {
	console.log(`This is info sent from front-end: ${user}`);
		if (user){
			
			res.status(401).json({message: 'That email is already taken'});
		} 
		else{	 
			User.create({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password_hash: req.body.password,
				phone: req.body.phone,
				student_id: req.body.student_id,
				school: req.body.school,
				student_major: req.body.student_major,
				student_classification: req.body.student_classification,
			})
			.then((user) => {
				//res.json({ msg: "user created" });
				res.status(201).json({ msg: "user created" });
			})
			.catch(() => {
				res.status(400).json({ msg: "error creating user" });
			});
		}
	});
};
 
// FETCH All users
exports.findAll = (req, res) => {
	User.findAll().then(users => {
			// Send All users to Client
			res.json(users);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a user by Id
exports.profile = (req, res) => {	

	console.log("This is the user id: ");
	console.log(req.body.user_id);
	User.findById(req.body.user_id).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a user
exports.update = (req, res) => {
	const id = req.body.id;
	User.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> user Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a user by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> user Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

