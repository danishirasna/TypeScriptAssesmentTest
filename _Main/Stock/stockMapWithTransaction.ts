import Istock from "../Interface/stock.interface";
import Itransaction from "../Interface/transaction.interface";
import stockUpdate from "./stockUpdate";

const stockMapWithTransaction = (transaction: Itransaction, stock: Istock[]): any => {
    let tempStock = [...stock];
    let notFoundedStockFlag=false;
    stock.forEach((data, index) => {
        if (!transaction[data.sku]) {
            console.log(`${data.sku} sku is not exist in Transactions and stock is ${data.stock}`);
            notFoundedStockFlag=true;
            return;
        }
        tempStock = stockUpdate(data.sku, transaction, tempStock, index);
    });
    return {stock:tempStock,notFoundedStockFlag}
}

export default stockMapWithTransaction
