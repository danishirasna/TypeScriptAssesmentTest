import Istock from "../Interface/stock.interface";

const stockUpdate = (sku: string, transaction: any, stock: Istock[], index: number): any => {
    let tempStock: Istock[] = [...stock]
    for (let value of transaction[sku].data) {

        transaction[sku].status = true;
        if (value.type === "refund") {
            tempStock[index].stock += value.qty
        }
        else {
            if (tempStock[index].stock != 0 && tempStock[index].stock >= value.qty) {
                tempStock[index].stock -= value.qty
            }
        }
    }
    return tempStock
}

export default stockUpdate
