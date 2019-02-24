'use strict';

module.exports.create = (event, context, callback) => {

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