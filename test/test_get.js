const https = require('https');
var chai = require('chai');
var chaiHTTP = require('chai-http');

const should = chai.should();
const expect = chai.expect();

chai.use(chaiHTTP);

describe('GET routes', () => {
    describe('index', () => {

        it('getting beer, its json', function() {   // <= No done callback
            chai.request('https://6uski1shah.execute-api.eu-north-1.amazonaws.com/dev/products')
            .get('')
            .end(function(err, res) {
                expect(req).to.be.json; // <= Test completes before this runs
            });
        });

    })
})
      