import { AWSError } from 'aws-sdk'
import { DocumentClient, GetItemOutput, ScanOutput } from 'aws-sdk/clients/dynamodb'
import { PromiseResult } from 'aws-sdk/lib/request'

const TABLE_HISTORIC_EVENT = 'local-historic-event'

/**
 * 歴史的な出来事マッパークラス
 */
export class HistoricEventMapper {
    constructor(private readonly documentClient: DocumentClient) {}

    /**
     * UUIDで検索する
     * @param {string} uuid 
     * @returns 
     */
    async findByUuid(uuid: string): Promise<PromiseResult<GetItemOutput, AWSError>> {
        return this.documentClient.get({
            TableName: TABLE_HISTORIC_EVENT,
            Key: {
                uuid: uuid
            }
        }).promise()
    }

    /**
     * 全件スキャンする
     * @returns 
     */
    async findAll(): Promise<PromiseResult<ScanOutput, AWSError>> {
        return this.documentClient.scan({
            TableName: TABLE_HISTORIC_EVENT
        }).promise()
    }
}