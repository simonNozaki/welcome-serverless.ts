const documentClient = require('./dynamodb').documentClient

// -------------------------------------
// ローカル検証用スクリプト
// -------------------------------------

process.argv.forEach(v => console.log(v))

documentClient.get({
    TableName: 'local-historic-event',
    Key: { uuid: process.argv[2] }
}).promise()
    .then(v => console.log(JSON.stringify(v.Item)))
