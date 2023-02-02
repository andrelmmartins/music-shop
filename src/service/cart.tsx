import * as api from "./backend";

const delay = ( amount = 750 ) => new Promise(resolve => setTimeout(resolve, amount));

export async function getCart() {
    await delay();

    return api.cart().data
}

export async function addToCart(id: string) {
    await delay();

    return api.addToCart(id).data
}

export async function removeFromCart(id: string) {
    await delay();

    return api.removeFromCart(id).data
}