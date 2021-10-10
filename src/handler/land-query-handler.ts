import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { documentClient } from '../infrastructure/document-client';
import { HistoricEventMapper } from '../infrastructure/historic-event-mapper';
import { parseJson } from '../util/object-util';
import { toResponse } from '../util/response-util';

/**
 * 地名に対応した歴史的なイベントを返してくれるAPIのハンドラ。
 * @param event 
 */
export const execute: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
    const req = parseJson(event.body)
    console.log(`リクエスト => ${req}`)

    // マッパー初期化
    const historicEventMapper = new HistoricEventMapper(documentClient)

    // フルスキャン
    const records = await historicEventMapper.findAll()
    records.Items.forEach(item => console.log(item))

    return toResponse({
        message: 'OK'
    })
}