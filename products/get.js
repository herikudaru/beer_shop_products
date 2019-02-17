'use strict';

module.exports.get = (event, context, callback) => {

  var AWS = require("aws-sdk");
  
  var docClient = new AWS.DynamoDB.DocumentClient();
  
  var params = {
      TableName: "Products",
  };
  
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
};