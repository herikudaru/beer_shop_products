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
                done(); // <= Test completes before this runs
            });
        });

    })
})
      