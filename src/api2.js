import { cryptoData } from "./data";

export default function fakeFetchData() {
    return new Promise(res => {
        setTimeout(() => {
            res(cryptoData)
        }, 2000)
    })
}