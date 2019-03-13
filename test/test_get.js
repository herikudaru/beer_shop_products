const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('GET routes', () => {
    describe('index', () => {

        it('getting beer, its json', function(done) {   // <= No done callback
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('')
            .end(function(err, req) {
                expect(req).to.be.json;
                expect(req).to.have.status(200);
                done(); // <= Test completes before this runs
            });
        });

        it('getting 1 beer, fails as expected', function(done) {   // <= No done callback
            chai.request(process.env.TEST_API_ENDPOINT)
            .get('')
            .set('product_id', 156)
            .end(function(err, req) {
                expect(req).to.have.status(404);
                done(); // <= Test completes before this runs
            });
        });

    })
})
      