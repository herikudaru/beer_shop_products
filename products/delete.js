'use strict';

module.exports.delete = (event, context, callback) => {

  const sharedSecretKey = process.env.SHARED_SECRET_KEY || "";
  const clientKey = event.headers.SHARED_SECRET_KEY || "";
  if (sharedSecretKey == "")
    callback('error');
  if (clientKey == "" || clientKey != sharedSecretKey)
    callback(null, {statusCode:401, body:JSON.stringify({"message":"unauthorized"})})

  var AWS = require("aws-sdk");

  var docClient = new AWS.DynamoDB.DocumentClient();

  var productid = event.headers.product_id || "";

  var params = {
    TableName: "Products",
    Key: {
      "id": productid
    }
  };

  docClient.delete(params, function (err, data) {
    if (err) {
      callback(JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: null,
      };
      callback(null, response);
    }
  });
};