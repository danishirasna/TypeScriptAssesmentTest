const Transaction  = require('../../_JSON/transaction/transactions.json')

interface groups {
    [sku: string]: any;
}

 
module.exports={
    parseTransactions(){
        let group: groups = {};
        console.log(Transaction,"test");
        
    
        let obj = Transaction
        Object.keys(obj).forEach((e) => {
            group[obj[e].sku] ? group[obj[e].sku].data.push({ qty: obj[e].qty, type: obj[e].type })
                : group[obj[e].sku] = {status:false,data:[{ qty: obj[e].qty, type: obj[e].type }]};
        }
        );
        return group;
    }
}