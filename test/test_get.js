const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('GET routes', () => {
    describe('index', () => {

        it('GET all', function(done) {   // <= No done callback
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('')
            .set('shared_secret_key', process.env.shared_secret_key)
            .end(function(err, req) {
                expect(req).to.have.status(200);
                expect(req).to.be.json;
                done(); // <= Test completes before this runs
            });
        });

        it('GET single product, expect 404', function(done) {   // <= No done callback
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('')
            .set('product_id', 999)
            .end(function(err, req) {
                expect(req).to.have.status(200);
                expect(req).to.be.json;
                done(); // <= Test completes before this runs
            });
        });

    })
})
      