var books = require('./controllers');

module.exports = function (app) {
    app.route('/books')
        .get(books.listBooks)
        .post(books.newBook);
}
