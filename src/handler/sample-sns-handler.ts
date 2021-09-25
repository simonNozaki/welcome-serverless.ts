import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda"
import { parseJson } from "src/util/object-util"
import { toBadRequest, toResponse } from "src/util/response-util"
import { v4 as uuidv4 } from 'uuid'

// システム日付採番。以下必要なければ変数はすべてletではなくconstで宣言する。
const now = Date().toString()

// APIの入力データ形式
interface HandlerRequest {
    serviceName: string
}

// APIの出力データ形式
interface HandlerResponse {
    serviceName: string,
    countryOfOrigin: string
    lauchedAt: string
}

interface Sns {
    uuid: string
    serviceName: string
    countryOfOrigin: string
    lauchedAt: string
    createdAt: string
    updatedAt: string
}

// インメモリの簡易データベース代替
const SnsMaster: Sns[] = [
    {
        uuid: uuidv4().toString(),
        serviceName: "twitter",
        countryOfOrigin: "US",
        lauchedAt: "2004",
        createdAt: now,
        updatedAt: now
    }
]


/**
 * 主要SNSの開始日、発祥国を返してくれるAPIハンドラ
 * @param event 
 */
export const execute: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {

    // object-util.tsに定義された関数parseJsonで入ってきたイベントの解析、オブジェクト化
    const request: HandlerRequest = parseJson(event.body)

    // JSON形式でない、中身がないなど不正なリクエストであればエラーメッセージを返して終了
    if (!request) {
        return toBadRequest({
            message: "リクエストが空、もしくはnullです"
        })
    }

    // sns-masterテーブルから、サービス名完全一致で検索。一個しかないはずなので配列の0番目を返してしまう。
    // 好みの問題だが、慣れないうちはforループ/if検索で対象を絞ってもよい。
    const queryResult = SnsMaster.filter(sns => sns.serviceName === request.serviceName)[0]

    // 検索結果0件ならエラーメッセージを返して終了
    if (!queryResult) {
        return toBadRequest({
            message: `検索結果が0件です, 検索対象サービス名: ${request.serviceName}`
        })
    }

    // 検索結果レスポンスの整形
    const response: HandlerResponse = {
        serviceName: queryResult.serviceName,
        lauchedAt: queryResult.lauchedAt,
        countryOfOrigin: queryResult.countryOfOrigin
    }

    // 正常な検索結果の返却。
    return toResponse(response)

}