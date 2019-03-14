const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('CREATE routes', () => {
    describe('index', () => {

        it('Create a product, no header, expect 400', function(done) {
            chai.request(process.env.TEST_API_ENDPOINT)
            .post('')
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

        it('Create a product, false header, expect 400', function(done) {
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

        it('Create a product', function(done) {
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
                done();
            });
        });
    })
})
      