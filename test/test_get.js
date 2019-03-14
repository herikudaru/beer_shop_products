const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('GET routes', () => {
    describe('index', () => {

        var prodId;
        var jsonObj;

        it('GET all', function(done) {
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('')
            .set('shared_secret_key', process.env.shared_secret_key)
            .end(function(err, req) {
                expect(req).to.have.status(200);
                expect(req).to.be.json;
                jsonObj = JSON.parse(req.body);
                prodId = jsonObj[0].id;
                done();
            });
        });

        it('GET single product, expect 404', function(done) {
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

        it('GET single product, expect 200', function(done) {
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
})
      