interface ItransactionArrayObject {
    type: string;
    qty: number;
}
interface ItransactionObject {
    status: boolean;
    data: ItransactionArrayObject[];
}
export default interface Itransaction {
    [sku: string]: ItransactionObject;
}