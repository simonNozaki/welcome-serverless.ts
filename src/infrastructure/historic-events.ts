import { v4 as uuidv4 } from 'uuid'
// システム日付
const now = Date().toString()

/**
 * 出来事オブジェクト
 */
interface Event {
    // 出来事のタイトル
    title: string
    // 発生年号
    happendOn: number
}

/**
 * 歴史的な出来事レコード
 */
export interface HistoricEvent {
    // レコードの一意キー
    uuid: string
    // 地名
    land: string
    // 土地の国名
    country: "FR" | "US" | "JP"
    // 出来事(複数形)
    events: Event[]
    createdAt: string
    updatedAt: string
}

/**
 * 歴史的な出来事マスタテーブル
 */
export const HistoricEventsProperty: HistoricEvent[] = [
    {
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
    },
    {
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
    },
    {
        uuid: uuidv4().toString(),
        land: "tokyo",
        country: "JP",
        events: [
            {
                title: "関東大震災",
                happendOn: 1923
            },
            {
                title: "東京都設置",
                happendOn: 1943
            },
            {
                title: "東京オリンピック",
                happendOn: 1963
            },
            {
                title: "東京オリンピック",
                happendOn: 2021
            }
        ],
        createdAt: now,
        updatedAt: now
    }
]