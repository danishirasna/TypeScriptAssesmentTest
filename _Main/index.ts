import Istock from "./Interface/stock.interface";
import Itransaction from "./Interface/transaction.interface";
import stockMapWithTransaction from "./Stock/stockMapWithTransaction";
import stockJsonReWrite from "./Stock/updateJsonFile";
import transactionJsonFormatChange from './Transaction/transactionJsonFormatChange';
const Stock = require("../_JSON/stock/stock.json")


const main = (dir: string) => {
    let stock: Istock[] = Stock;
    let transaction: Itransaction = transactionJsonFormatChange();

    stockJsonReWrite(() => stockMapWithTransaction(transaction, stock), dir);
    for (let [key, value] of Object.entries(transaction)) {
        if (!value.status) {
            console.log(`${key} sku is not exist in Stocks`);
        }
    }
    return true;
}
export default main


