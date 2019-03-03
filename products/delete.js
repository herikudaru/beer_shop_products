'use strict';

module.exports.delete = (event, context, callback) => {

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