const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

var expect = chai.expect;

chai.use(chaiHTTP);

describe('GET routes', () => {
    describe('index', () => {

        it('getting beer, its json', function(done) {   // <= No done callback
            chai.request('https://6uski1shah.execute-api.eu-north-1.amazonaws.com/dev/products')
            .get('')
            .end(function(err, req) {
                expect(req).to.be.json;
                done(); // <= Test completes before this runs
            });
        });

    })
})
      