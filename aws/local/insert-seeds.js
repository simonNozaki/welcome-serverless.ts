const documentClient = require('./dynamodb').documentClient
const uuidv4 = require('uuid').v4

// ---------------------------------
// ローカル用DDBテーブルにシードデータを投入する
// ---------------------------------

const now = Date().toString()

documentClient.put({
    TableName: 'local-historic-event',
    Item: {
        uuid: uuidv4().toString(),
        land: "normandy",
        country: "FR",
        events: [
            {
                title: "ノルマンディ上陸作戦",
                happendOn: 1944
            }
        ],
        createdAt: now,
        updatedAt: now
    }
}, function(err, data) {
    if (err) {
        console.error(err)
    }

    console.log("local-historic-eventにレコードを一件登録しました")
})

documentClient.put({
    TableName: 'local-historic-event',
    Item: {
        uuid: uuidv4().toString(),
        land: "washington, d.c.",
        country: "US",
        events: [
            {
                title: "キング牧師による演説",
                happendOn: 1963
            },
            {
                title: "911テロ事件",
                happendOn: 2001
            }
        ],
        createdAt: now,
        updatedAt: now
    }
}, function(err, data) {
    if (err) {
        console.error(err)
    }

    console.log("local-historic-eventにレコードを一件登録しました")
})

