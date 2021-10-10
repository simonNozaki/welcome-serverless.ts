import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

AWS.config.update({ region: 'ap-northeast-1' })

export const documentClientConfig: AWS.DynamoDB.Types.ClientConfiguration = {
    apiVersion: '2012-08-10',
    endpoint: 'http://localhost:8000'
}

/**
 * DynamoDB ドキュメントクライアント
 */
export const documentClient: DocumentClient = new AWS.DynamoDB.DocumentClient(documentClientConfig)
