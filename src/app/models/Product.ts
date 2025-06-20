export interface IProduct {
    id?: number;
    name?: string;
    price?: number;
    email?: string;
    date?: Date;
}

export class Product {
    id?: number;
    name?: string;
    price?: number;
    email?: string;
    date?: Date;

    constructor(data?: IProduct) {
        this.id = data?.id;
        this.name = data?.name;
        this.price = data?.price;
        this.email = data?.email;
        this.date = data?.date;
    }
}