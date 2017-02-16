var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../index');
var Book = require('../../app/book-model');
var should = chai.should();
chai.use(chaiHttp);

describe('Books', function(){
    before(function(done){
        Book.remove(function(){
            done();
        });
    });

    //test the post route
    describe('/POST book', function() {
        it('should create new books without errors', function(done){
            var book = {
                title: 'The jungle',
                author: 'Wole Soyinka'
            };
            chai.request(server)
                .post('/books')
                .send(book)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql('The jungle');
                    res.body.should.have.property('author');
                    done();
                });
        });
    });

    describe('/GET books', function() {
        it('get all books', function(done){
            chai.request(server)
                .get('/books')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});
