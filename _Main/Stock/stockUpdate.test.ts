import stockUpdate from "./stockUpdate";

describe('check Transactioon and Stock test', () => {
    let sku="LLG964262/20/67";
    let index=0;
    let stock = [
        {
            sku: "LLG964262/20/67",
            stock: 3
        }
    ];
    let transaction = {
        'LLG964262/20/67': {
            status: false,
            data: [{ type: "refund", qty: 2 }, { type: "order", qty: 5 }]
        }
    }
    it('stock refund and order both', () => {
        expect(stockUpdate(sku,transaction, stock,index)).toEqual(expect.arrayContaining([{
            "sku": "LLG964262/20/67",
            "stock": 0
        }
        ]));
    })

    it('stock refund and order cannot be proccess due to low quantity', () => {

        let transaction = {
            'LLG964262/20/67': {
                status: false,
                data: [{ type: "refund", qty: 2 }, { type: "order", qty: 15 }]
            }
        }
        expect(stockUpdate(sku,transaction, stock,index)).toEqual(expect.arrayContaining([{
            "sku": "LLG964262/20/67",
            "stock": 2
        }
        ]));
    })
})
