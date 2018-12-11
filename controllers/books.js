
// const express = require('express');
const models = require('../models');
const db = require('../config/config');
const Books = models.book;
const Library = models.library;


// saveToLibrary = (data, res) =>{
//     Library.findOne({
//         where: {
//             book_book_isbn: data.body.book_isbn
//         }
//     }).then(function(mybook){
//         if (mybook){
//             res.status(401).json({message: 'Book already in your library'});
//         }
//         else{
//             Library.create({
//                 book_book_isbn: data.body.book_isbn,
//                 user_id: data.body.user_id,
//                 condition: data.body.condition,
//             })
//             .then((mybook) => {
//                 res.status(201).json({ msg: "Book uploaded successfuly" });
//             })
//             .catch(() => {
//                 res.status(400).json({ msg: "error uploading book" });
//             });
//         }
//     })
//   };

// // Post a user
exports.uploadBooks = (req, res) => {
	Books.findOne({
		where: {
			book_isbn: req.body.book_isbn
		}
	}).then(function(book) {
    console.log("This is info sent from front-end:");
    console.log(req.body.book_isbn);
		if (book){
			console.log(book);
            //res.status(401).json({message: "Book aleady exists in the database."});
            //saveToLibrary(req);
            Library.findOne({
                where: {
                    book_book_isbn: req.body.book_isbn
                }
            }).then(function(mybook){
                if (mybook){
                    res.status(401).json({message: 'Book already in your library'});
                }
                else{
                    console.log("Save book to library");
                    console.log(mybook);
                    Library.create({
                        book_book_isbn: req.body.book_isbn,
                        user_id: req.body.user_id,
                        condition: req.body.condition,
                    })
                    .then((mybook) => {
                        res.status(201).json({ msg: "Book uploaded successfuly" });
                    })
                    .catch(() => {
                        res.status(400).json({ msg: "error uploading book" });
                    });
                }
            })
            
		} 
		else{	 
            Books.create({
				book_isbn: req.body.book_isbn,
				title: req.body.title,
				description: req.body.description,
				type: req.body.type,
				image: req.body.image,
			})
			// .then((book) => {
			// 	//res.json({ msg: "user created" });
			// 	res.status(201).json({ msg: "Book uploaded" });
			// })
			// .catch(() => {
			// 	res.status(400).json({ msg: "error uploading book" });
            // });
            
            //saveToLibrary(req);
            Library.findOne({
                where: {
                    book_book_isbn: req.body.book_isbn
                }
            }).then(function(mybook){
                if (mybook){
                    res.status(401).json({message: 'Book already in your library'});
                }
                else{
                    Library.create({
                        book_book_isbn: req.body.book_isbn,
                        user_id: req.body.user_id,
                        condition: req.body.condition,
                    })
                    .then((mybook) => {
                        res.status(201).json({ msg: "Book uploaded successfuly" });
                    })
                    .catch(() => {
                        res.status(400).json({ msg: "error uploading book" });
                    });
                }
            })
		}
	});
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

