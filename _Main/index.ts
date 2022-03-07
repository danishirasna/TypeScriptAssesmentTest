import Istock from "./Interface/stock.interface";
import Itransaction from "./Interface/transaction.interface";

const Stock  = require("../_JSON/stock/stock.json")
const { parseTransactions } = require('./Transaction/transactionParse.ts')

const main=()=>{

    let stock: Istock[] = Stock;
    let transaction: Itransaction = parseTransactions();

    for (let data of stock) {
        if (!transaction[data.sku]) {
            console.log(`${data.sku} sku is not exist in Transactions and stock is ${data.stock}`);
            return;
        }
        console.log(`${data.sku} sku stock is ${data.stock} in Stock Json`);
        let sum = 0;
        for (let value of transaction[data.sku].data) {
            sum += value.qty;
        }
        console.log(`${data.sku} sku quantity sum is ${sum} in Transaction Json`);
        transaction[data.sku].status = true;
    }
    for (let [key, value] of Object.entries(transaction)) {
        if (!value.status) {
            console.log(`${key} sku is not exist in Stock and Transaction record is ${JSON.stringify(value.data)}`);
        }


    }
    return true;
}
export default main

