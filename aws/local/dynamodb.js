const AWS = require('aws-sdk')

AWS.config.update({ region: 'ap-northeast-1' })

const config = {
    endpoint: 'http://localhost:8000',
    apiVersion: '2012-08-10'
}

module.exports.dynamoDb = new AWS.DynamoDB(config);

module.exports.documentClient = new AWS.DynamoDB.DocumentClient(config)
