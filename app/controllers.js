var Books = require('./book-model');

module.exports = {
    newBook: function(req, res){
        Books.create(req.body, function(err, book){
            if(err){
                res.json(err);
            } else {
                res.json(book);
            }
        });
    },
    listBooks: function(req, res){
        Books.find({}, function(err, books){
            if(err){
                res.json(err);
            } else {
                res.json(books);
            }
        });
    }
};