const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('/products', () => {

    var prodId;

    it('should fail to create a product', function(done) {
        chai.request(process.env.TEST_API_ENDPOINT)
        .post('')
        .set('shared_secret_key', 'false_header')
        .send({
            "name": "New beer",
            "description": "Ale, 3.1%",
            "image": "example.com/12.png",
            "price": 9.99
        })
        .end(function(err, req) {
            expect(req).to.have.status(400);
            expect(req).to.be.json;
            done();
        });
    });

    it('should create a product', function(done) {
        chai.request(process.env.TEST_API_ENDPOINT)
        .post('')
        .set('shared_secret_key', process.env.shared_secret_key)
        .send({
            "name": "New beer",
            "description": "Ale, 3.1%",
            "image": "example.com/12.png",
            "price": 9.99
        })
        .end(function(err, req) {
            expect(req).to.have.status(201);
            expect(req).to.be.json;
            prodId = req.body.id;
            done();
        });
    });

    it('should get all', function(done) {
        chai.request(process.env.TEST_API_ENDPOINT)
        .get('')
        .set('shared_secret_key', process.env.shared_secret_key)
        .end(function(err, req) {
            expect(req).to.have.status(200);
            expect(req).to.be.json;
            expect(req.body[0]).to.have.property('name');
            expect(req.body[0]).to.have.property('description');
            expect(req.body[0]).to.have.property('image');
            expect(req.body[0]).to.have.property('price');
            done();
        });
    });

    it('it should fail to get a single product', function(done) {
        chai.request(process.env.TEST_API_ENDPOINT)
        .get('')
        .set('shared_secret_key', process.env.shared_secret_key)
        .set('product_id', 999)
        .end(function(err, req) {
            expect(req).to.have.status(404);
            expect(req).to.be.json;
            done();
        });
    });

    it('it should get a single product', function(done) {
        chai.request(process.env.TEST_API_ENDPOINT)
        .get('')
        .set('shared_secret_key', process.env.shared_secret_key)
        .set('product_id', prodId)
        .end(function(err, req) {
            expect(req).to.have.status(200);
            expect(req).to.be.json;
            done();
        });
    });
})
      