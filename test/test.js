const should = require("should");
const aws = require("aws-sdk");
const dynamodbLocal = require("../indexTest.js")

var get, callback= require('../products/get.js');
var chai = require('chai'), chaiHttp = require('chai-http');
var expect = require('chai').expect;
chai.use(require('chai-json'));
chai.use(chaiHttp);

aws.config.update({ accessKeyId: "fakeID", secretAccessKey: "fakeID", region: "eu-north-1" });

let db = new aws.DynamoDB({ endpoint: 'http://localhost:8000'});

describe("Check if get is json", function() {
    
    context('without arguments', function() {
        it('should return everything', function() {
            chai.request('http://localhost:8000').get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
            });
            //var response = JSON.parse(get());
            //expect(response.to.be.a.jsonObj(jsonObj))
        })
    })
    /*describe("#update table", function(){
      this.timeout(50000);
      it("should update the table", function(done){
        var params = {
            "AttributeDefinitions": [ 
                { 
                  "AttributeName": "id",
                  "AttributeType": "N"
                }
            ],   
            "ProvisionedThroughput": { 
                "ReadCapacityUnits": 10,
                "WriteCapacityUnits": 10
            },
            "TableName": "productsTest"
          }
   
      db.updateTable(params,function(err,data){
          if (err){
              should.not.exist(data);
          } else {
              data.TableDescription.should.have.property("TableName","productsTest");
              should.exist(data);
          }
          done();
        });
      });

    });*/
});