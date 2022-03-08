import Istock from '../Interface/stock.interface';
import stockQuantityUpdate from './stockMapWithTransaction';


describe('check Transactioon and Stock test', () => {
    let stock = [
        {
            "sku": "LLG964262/20/67",
            "stock": 3
        },
        {
            "sku": "NMK838808/89/94",
            "stock": 7489
        }
    ];
    let transaction = {
        'LLG964262/20/67': {
            status: false,
            data: [{ type: "refund", qty: 2 }, { type: "order", qty: 5 }]
        },
        'NMK838808/89/94': {
            status: true,
            data: [{ type: "refund", qty: 2 }, { type: "order", qty: 5 }]
        }
    }
    it('stock update case', () => {
        expect(stockQuantityUpdate(transaction, stock)).toEqual(expect.objectContaining({
            stock: expect.arrayContaining([{
                "sku": "LLG964262/20/67",
                "stock": 0
            },
            {
                "sku": "NMK838808/89/94",
                "stock": 7486
            }
            ])
        }));
    })

    it('stock update if ant stock sku id not founded in transaction', () => {
        let stock: Istock[] = [
            {
                "sku": "LG964262/20/60",
                "stock": 3
            }
        ];
        expect(stockQuantityUpdate(transaction, stock)).toEqual(expect.objectContaining({ notFoundedStockFlag: true }));
    })
})
