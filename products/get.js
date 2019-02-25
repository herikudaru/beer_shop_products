'use strict';

module.exports.get = (event, context, callback) => {

  var AWS = require("aws-sdk");

  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "Products",
  };
  var productid = event.headers.product_id || "";
  if (productid !== "") {
    var statusState = 200;

    params["Key"] = { "id": productid }
    docClient.get(params, function (err, data) {
      if (err) {
        callback(JSON.stringify(err, null, 2));
      } else {
        if (JSON.stringify(data) === "{}") {
          statusState = 404;
        }
        const response = {
          statusCode: statusState,
          body: statusState == 200 ? JSON.stringify(data.Item) : null,
        };
        callback(null, response);
      }
    });
  }
  else {
    docClient.scan(params, onScan);

    function onScan(err, data) {
      if (err) {
        callback(JSON.stringify(err, null, 2));
      } else {
        const response = {
          statusCode: 200,
          body: JSON.stringify(data.Items),
        };
        callback(null, response);
      }
    }

  }
};
