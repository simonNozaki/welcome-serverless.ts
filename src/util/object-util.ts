/**
 * 文字列をパースしてオブジェクトを返す。パースに失敗したらnullを返す。
 * @param o 
 * @returns 
 */
 export function parseJson (o: string) {
    try {
        return JSON.parse(o)
    } catch (e) {
        return null
    }
}