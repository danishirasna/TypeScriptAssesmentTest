import * as fs from 'fs';
const file = require('../../_JSON/stock/stock.json');
const stockJsonReWrite = (callback: any, dir: string) => {
    try {
        let stocks: any = callback();

        fs.unlinkSync(dir + "/_JSON/stock/stock.json");
        fs.writeFileSync(dir + "/_JSON/stock/stock.json", JSON.stringify(stocks["stock"]));
    }
    catch (err) {
        return false;
    }

    return true;
}
export default stockJsonReWrite