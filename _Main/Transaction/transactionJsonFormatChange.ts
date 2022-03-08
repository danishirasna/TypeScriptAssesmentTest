import ItransactionJsonFormatChange from "../Interface/transactionJsonFormat.interface";
const TransactionJson = require('../../_JSON/transaction/transactions.json');

const transactionJsonFormatChange = () => {
    let newTransactionJsonFormat: ItransactionJsonFormatChange = {};
    let obj = TransactionJson;
    Object.keys(obj).forEach((e) => {
        if (newTransactionJsonFormat[obj[e].sku]) {
            if(obj[e].type==="refund"){
                newTransactionJsonFormat[obj[e].sku].data.unshift({ qty: obj[e].qty, type: obj[e].type })
            }else{
                newTransactionJsonFormat[obj[e].sku].data.push({ qty: obj[e].qty, type: obj[e].type })
            }
            
        }
        else {
            newTransactionJsonFormat[obj[e].sku] = { status: false, data: [{ qty: obj[e].qty, type: obj[e].type }] };
        }
    });   
    
    return newTransactionJsonFormat;
}
export default transactionJsonFormatChange;