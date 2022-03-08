import stockJsonReWrite from "./updateJsonFile";
const Stock = require("../../_JSON/stock/stock.json")
describe('update json file', () => {

    let dir="C:/Users/danii/Downloads/Node Typescript";

    it('update json file', () => {
        expect(stockJsonReWrite(()=>{return {stock:Stock}},dir)).toBeTruthy();
    })
})
