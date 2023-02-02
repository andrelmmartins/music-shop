export type ProductType = 'guitars' | 'bags' | 'lifestyle' | 'assets'

export type ProductObject = {
    id: string,
    type: ProductType,
    name: string,
    description: string,
    price: number,
    quantityInStock: number,
    images: string[]
}

export default class Product {

    #id: string
    #type: ProductType
    #name: string
    #description: string
    #price: number
    #quantityInStock: number
    #images: string[]

    constructor(id: string, type: ProductType, name: string, description: string, price: number, quantityInStock: number, images: string[]) {
        this.#id = id
        this.#type = type
        this.#name = name
        this.#description = description
        this.#price = price
        this.#quantityInStock = quantityInStock
        this.#images = images
    }

    get id() {
        return this.#id   
    }

    get type() {
        return this.#type   
    }

    get name() {
        return this.#name   
    }

    get description() {
        return this.#description   
    }

    get price() {
        return this.#price   
    }

    get quantityInStock() {
        return this.#quantityInStock   
    }

    get images() {
        return this.#images   
    }

    get isAvailable() {
        return this.#quantityInStock != 0;   
    }

    static parse(object: ProductObject) {
        return new Product(object.id, object.type, object.name, object.description, object.price, object.quantityInStock, object.images);
    }

}