'use strict';

module.exports.create = (event, context, callback) => {

  var AWS = require("aws-sdk");
  var uuid = require('uuid');
  
  var docClient = new AWS.DynamoDB.DocumentClient();

  const data = JSON.parse(event.body);


  // var description ="testbeer";
  // var name ="Test Beer";
  // var image="example.com/0.png";
  // var price=123.10
  
  var params = {
      TableName: "Products",
      Item:{
        "id": uuid.v4(),
        "name": data.name,
        "description": data.description,
        "image": data.image,
        "price": data.price,
    }
  };
  docClient.put(params, function(err, data) {
    if (err) {
        callback(JSON.stringify(err, null, 2));
    } else {
        const response = {
            statusCode: 201,
            body:null,
          };
        callback(null, response);
    }
  });
}