var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    }
});

module.exports = mongoose.model('Books', bookSchema);