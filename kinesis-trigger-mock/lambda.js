let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.put({
		TableName: 'chamath-test-dynamo',
		Item: { 'ID': '001', 'Name': 'Chamath', 'Message': 'Hello from Sigma' }
	}, function (err, data) {
		if (err) {
			callback(err, 'Error in executing DynamoDB#putItem');
		} else {
			callback(null, data);
		}
	});

}