const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('GET routes', () => {
    describe('index', () => {

        it('GET all', function(done) {   // <= No done callback
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('/products')
            .set('shared_secret_key', process.env.shared_secret_key)
            .end(function(err, req) {
                expect(req).to.be.json;
                expect(req).to.have.status(200);
                done(); // <= Test completes before this runs
            });
        });

        it('GET single product, expect 404', function(done) {   // <= No done callback
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('/products')
            .set('product_id', 156)
            .end(function(err, req) {
                expect(req).to.have.status(404);
                done(); // <= Test completes before this runs
            });
        });

    })
})
      