
// const express = require('express');
const models = require('../models');
const db = require('../config/config');
const Books = models.book;
const Library = models.library;


// Post a book
exports.uploadBooks = (req, res) => {
	Books.findOne({
		where: {
			book_isbn: req.body.book_isbn
		}
	}).then(function(book) {
    console.log("This is info sent from front-end:");
    console.log(req.body.book_isbn);
    
    // If Book exists in the Book table, then create it in the library table
    if (book){
			console.log(book);

            Library.findOne({
                where: {
                    book_isbn: req.body.book_isbn,
                    user_id: req.body.user_id

                }
            }).then(function(mybook){
                if (mybook){
                    res.status(401).json({message: 'Book already in your library'});
                }
                else{
                    console.log("Save book to library");
                    console.log(mybook);
                    Library.create({
                        book_isbn: req.body.book_isbn,
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
        
        // If Book does not exits in the Books table then create it at both the books and library table
		else{	 
            Books.create({
				book_isbn: req.body.book_isbn,
				title: req.body.title,
				description: req.body.description,
				type: req.body.type,
				image: req.body.image,
			})

            Library.findOne({
                where: {
                    book_isbn: req.body.book_isbn,
                    user_id: req.body.user_id
                }
            }).then(function(mybook){
                if (mybook){
                    res.status(401).json({message: 'Book already in your library'});
                }
                else{
                    Library.create({
                        book_isbn: req.body.book_isbn,
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



