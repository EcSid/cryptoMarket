import { cryptoData, cryptoAssets } from "./data";

export function fetchCryptoData() {
    return new Promise(res => {
        setTimeout(() => {
            res(cryptoData)
        }, 500)
    }).then(data => data)
}

export function fetchCryptoAssets() {
    return new Promise(res => {
        setTimeout(() => {
            res(cryptoAssets)
        }, 500)
    })
}