import * as fs from 'fs';
const file = require('../../_JSON/stock/stock.json');

const stockJsonReWrite = (callback: any, dir: string) => {

    let stocks: any = callback();
    if (file) {
        fs.unlinkSync(dir + "/_JSON/stock/stock.json")
    }
    fs.writeFileSync(dir + "/_JSON/stock/stock.json", JSON.stringify(stocks["stock"]));

    return true;


}
export default stockJsonReWrite