// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dynamoDb = require('./dynamodb').dynamoDb

// ---------------------------------
// ローカル用DDBテーブルを作成する
// ---------------------------------
// local-historic-event
const historicEvent = dynamoDb.createTable({
    TableName: 'local-historic-event',
    AttributeDefinitions: [
        {
            AttributeName: "uuid",
            AttributeType: "S"            
        }
    ],
    KeySchema: [
        {
            AttributeName: "uuid",
            KeyType: "HASH"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1000,
        WriteCapacityUnits: 1000
    }
});

historicEvent.promise()
    .then(data => console.log("テーブルの作成に成功しました", data.TableDescription.TableName))
    .catch(e => console.error("テーブルの作成に失敗しました", e))
