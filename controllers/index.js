const user = require('./user');
const auth = require('./auth');
const books = require('./books')
const library = require('./library');
const wantedbooks = require('./interestedbooks')

module.exports = {
	user: user,
	auth: auth,
	books: books,
	mylibrary: library,
	wantedbooks: wantedbooks,
};