const user = require('./user');
const auth = require('./auth');
const books = require('./books')
const library = require('./library');

module.exports = {
	user: user,
	auth: auth,
	books: books,
	mylibrary: library,
};