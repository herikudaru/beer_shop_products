var env = process.env.NODE_ENV || 'dev';

module.exports.get = (event, context, callback) => {

  var AWS = require("aws-sdk");
  
  if (env = 'dev') {
    var docClient = new AWS.DynamoDB.DocumentClient({ endpoint: 'http://localhost:8000'});
  } else {
    var docClient = new AWS.DynamoDB.DocumentClient();
  }

  if (env = 'dev') {
    var params = {
        TableName: "productsTest",
    };
  } else {
    var params = {
      TableName: "Products",
    };
  }
  
  docClient.scan(params, onScan);
  
  function onScan(err, data) {
    'use strict';
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