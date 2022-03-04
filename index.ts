const { Stock } = require("./stock.ts")
const { parseTransactions } = require('./TransactionParse')

interface ItransactionArrayObject {
    type: string;
    qty: number;
}
interface ItransactionObject {
    status: boolean;
    data: ItransactionArrayObject[];
}


interface Istocks {
    sku: string;
    stock: number;
}
interface ItransactionParser {
    [sku: string]: ItransactionObject;
}
const main=()=>{

    let stock: Istocks[] = Stock();
    let transaction: ItransactionParser = parseTransactions();

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

