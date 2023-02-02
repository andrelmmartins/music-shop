import { parseCookies, setCookie } from "nookies"
import { ProductObject } from "../models/product"

export const all : ProductObject[] = [
    { id: '1', type: 'guitars', name: 'Tagima Cansas', description: 'Violão Tagima Cansas', price: 3954.25, quantityInStock: 2, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-06-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-07-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/05/10360510-08-1000x564.jpg',
    ] },

    { id: '2', type: 'guitars', name: 'Tagima Dallas', description: 'Violão Tagima Dallas', price: 3954.25, quantityInStock: 10, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/Sistema-Mirai-Fundo-Mogno-Para-Site-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-06-1000x1000.jpg'
    ] },

    { id: '3', type: 'guitars', name: 'Memphis MD30', description: 'Violão Memphis MD30', price: 3954.25, quantityInStock: 24, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/Sistema-Mirai-Fundo-Mogno-Para-Site-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-06-1000x1000.jpg'
    ] },

    { id: '4', type: 'guitars', name: 'Memphis MD20', description: 'Violão Memphis MD20', price: 3954.25, quantityInStock: 1, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/Sistema-Mirai-Fundo-Mogno-Para-Site-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-06-1000x1000.jpg'
    ] },

    { id: '5', type: 'guitars', name: 'Takamine Marrom', description: 'Violão Takamine Marrom', price: 3954.25, quantityInStock: 0, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/Sistema-Mirai-Fundo-Mogno-Para-Site-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-06-1000x1000.jpg'
    ] },

    { id: '6', type: 'guitars', name: 'Tagima Baby Mahogany', description: 'Violão Tagima Baby Mahogany', price: 3954.25, quantityInStock: 6, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/Sistema-Mirai-Fundo-Mogno-Para-Site-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-06-1000x1000.jpg'
    ] },

    { id: '7', type: 'guitars', name: 'Seizi Baby', description: 'Seizi Baby', price: 3954.25, quantityInStock: 5, images: [
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-01-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-02-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-03-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/Sistema-Mirai-Fundo-Mogno-Para-Site-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-04-1000x564.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-05-1000x1000.jpg',
        'https://www.royalmusic.com.br/wp-content/uploads/2022/03/10360530-06-1000x1000.jpg'
    ] }
]

export const guitars = () => {
    return { 
        data: all.filter(product => product.type == 'guitars') 
    }
}

export const assets = () => { 
    return {
        data: all.filter(product => product.type == 'assets')
    }
}

export const bags = () => { 
    return {
        data: all.filter(product => product.type == 'bags')
    }
}

export const lifestyle = () => { 
    return {
        data: all.filter(product => product.type == 'lifestyle')
    }
}

export const getProduct = (id: string) => { 
    return {
        data: all.find( product => product.id == id)
    }
}

// Cart

function manageCookie(cart: string[]) {
    setCookie(undefined, 'musicShop@cart', JSON.stringify(cart), {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: '/',
    })
}

let cartDatabase : string[] = []

const { [ 'musicShop@cart' ] : cartOnCookies } = parseCookies(undefined); 

if(cartOnCookies) {
    cartDatabase = JSON.parse(cartOnCookies)
} else {
    manageCookie([])
}

export const cart = () => {

    let products : ProductObject[] = []

    cartDatabase.forEach(id => {
        let founded = all.find( element => element.id == id)
        
        if (!founded) removeFromCart(id)
        else products.push(founded);
    })

    return {
        data: products
    }
}

export function addToCart(id: string) {
    const product = all.find( product => product.id == id);
    if(!product) throw 'Product not found'
    
    cartDatabase.push(id);
    manageCookie(cartDatabase)

    return { data: {} }
}

export function removeFromCart(id: string) {

    const product_index = cartDatabase.findIndex(product_id => product_id === id)    
    if(product_index == -1) throw 'Product not found'
    
    cartDatabase.splice(product_index, 1);
    manageCookie(cartDatabase)

    return { data: {} }
}