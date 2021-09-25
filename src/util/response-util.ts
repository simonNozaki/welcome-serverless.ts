import { APIGatewayProxyResult } from 'aws-lambda'

/**
 * BadRequest
 * @param {T} body
 * @returns
 */
export function toBadRequest<T> (body?: T): APIGatewayProxyResult {
    return getResponse(400, body)
}

/**
 * InternalServerError
 * @param {T} body
 * @returns
 */
export function toInternalServerError<T> (body: T): APIGatewayProxyResult {
    return getResponse(500, body)
}

/**
 * Lambdaのレスポンスを返却する
 * @param {T} body レスポンスボディ
 * @return Responseインスタンス
 */
export function toResponse<T> (body?: T): APIGatewayProxyResult {
    return getResponse(200, body)
}

function getResponse<T> (status: number, body?: T): APIGatewayProxyResult {
    const res = {
        statusCode: status,
        body: JSON.stringify(body, null, 2)
    }

    console.info('レスポンス: ', body)

    return res
}