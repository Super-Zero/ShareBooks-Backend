
// const express = require('express');
const models = require('../models');
const db = require('../config/config');
const InterestedBooks = models.interestedbook;
const Library = models.library;
const Sequelize = require('sequelize');
const Op = Sequelize.Op



// // Upload interested books
exports.wantedBooks = (req, res) => {
    InterestedBooks.findOne({
		where: {
            [Op.and]:
                [
                    {user_id: req.body.user_id},
                    {book_isbn: req.body.book_isbn}
                ]
        } 
	})
    .then(function(book){
        if (book){
            res.status(401).json({message: 'The wanted book already exist'});
        }
        else{
            InterestedBooks.create({
                book_isbn: req.body.book_isbn,
                user_id: req.body.user_id,
                status: true,
            })
            .then((res) => {
                //res.json({ msg: "user created" });
                res.status(201).json({ msg: "Wanted Book uploaded" });
            })
            .catch(() => {
                res.status(400).json({ msg: "Error uploading wanted book" });
            });

        }
    })
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

