
// const express = require('express');
const models = require('../models');
const db = require('../config/config');
const Books = models.Books;
const Library = models.Library;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sharebooks_development', 'ctp_user', 'ctp_user', {
	// gimme postgres, please!
	dialect: 'postgres'
  })


//SELECT * FROM books WHERE EXISTS (SELECT book_book_isbn FROM libraries WHERE user_id = 1)


// Find a user by Id
exports.mylibrary = (req, res) => {	
	console.log(`This is the user id: ${req.body.user_id}`)
	sequelize.query(
		"SELECT * FROM books left join libraries on books.book_isbn = libraries.book_book_isbn left join users on users.user_id = libraries.user_id where users.user_id  = ?",
		{ type: sequelize.QueryTypes.SELECT, replacements: [req.body.user_id]})
  	.then(myLibrary => {
	// We don't need spread here, since only the results will be returned for select queries
	console.log(`The content of my library: ${myLibrary}`);
		res.json(myLibrary);
		
  })
  .catch(console.error)
  .catch(() => {
		res.status(400).json({ msg: "error getting books" });
	});


	// console.log("This is the user id: ");
	// console.log(req.body.user_id);
	// Library.findById(req.body.user_id).then(books => {
	// 		res.json(books);
	// 	}).catch(err => {
	// 		console.log(err);
	// 		res.status(500).json({msg: "error", details: err});
	// 	});
};



// // FETCH All users
// exports.findAll = (req, res) => {
// 	User.findAll().then(users => {
// 			// Send All users to Client
// 			res.json(users);
// 		}).catch(err => {
// 			console.log(err);
// 			res.status(500).json({msg: "error", details: err});
// 		});
// };

// // Find a user by Id
// exports.profile = (req, res) => {	

// 	console.log("This is the user id: ");
// 	console.log(req.body.user_id);
// 	User.findById(req.body.user_id).then(user => {
// 			res.json(user);
// 		}).catch(err => {
// 			console.log(err);
// 			res.status(500).json({msg: "error", details: err});
// 		});
// };
 
// // Update a user
// exports.update = (req, res) => {
// 	const id = req.body.id;
// 	User.update( req.body, 
// 			{ where: {id: id} }).then(() => {
// 				res.status(200).json( { mgs: "Updated Successfully -> user Id = " + id } );
// 			}).catch(err => {
// 				console.log(err);
// 				res.status(500).json({msg: "error", details: err});
// 			});
// };

// // Delete a user by Id
// exports.delete = (req, res) => {
// 	const id = req.params.id;
// 	User.destroy({
// 			where: { id: id }
// 		}).then(() => {
// 			res.status(200).json( { msg: 'Deleted Successfully -> user Id = ' + id } );
// 		}).catch(err => {
// 			console.log(err);
// 			res.status(500).json({msg: "error", details: err});
// 		});
// };

