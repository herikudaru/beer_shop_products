'use strict';

module.exports.modify = (event, context, callback) => {

  var AWS = require("aws-sdk");

  var docClient = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

  const data = JSON.parse(event.body);

  var productid = event.headers.product_id || "";

  var params = {
    TableName: "Products",
    Key: {
      "id": productid
    },
    ExpressionAttributeNames: {
      '#product_name': 'name',
    },
    ExpressionAttributeValues: {
      ":name": data.name,
      ":description": data.description,
      ":image": data.image,
      ":price": data.price,
    },
    UpdateExpression: 'SET #product_name=:name, description=:description, image=:image, price=:price',
    ReturnValues: "UPDATED_NEW"
  };

  docClient.update(params, function (err, result) {
    if (err) {
      callback(JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(result.Attributes),
      };
      callback(null, response);
    }
  });
};