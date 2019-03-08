'use strict';

module.exports.create = (event, context, callback) => {

  const sharedSecretKey = process.env.SHARED_SECRET_KEY || "";
  const clientKey = event.headers.shared_secret_key || "";
  if (sharedSecretKey == "") {
    callback('error');
    return;
  }
  if (clientKey == "" || clientKey != sharedSecretKey) {
    callback(null, {statusCode:401, body:JSON.stringify({"message":"unauthorized"})});
    return;
  }
  
  var AWS = require("aws-sdk");
  var uuid = require('uuid');

  var docClient = new AWS.DynamoDB.DocumentClient();

  const data = JSON.parse(event.body);
  const id = uuid.v4();
  var params = {
    TableName: "Products",
    Item: {
      "id": id,
      "name": data.name,
      "description": data.description,
      "image": data.image,
      "price": data.price,
    }
  };
  docClient.put(params, function (err, data) {
    if (err) {
      callback(JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 201,
        body: JSON.stringify({"id":id}),
      };
      callback(null, response);
    }
  });
}