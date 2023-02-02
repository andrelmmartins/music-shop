import * as api from "./backend";

const delay = ( amount = 750 ) => new Promise(resolve => setTimeout(resolve, amount));

export async function getGuitars() {
    await delay();

    return api.guitars().data
}

export async function getBags() {
    await delay();

    return api.bags().data
}

export async function getAssets() {
    await delay();

    return api.assets().data
}

export async function getLifestyle() {
    await delay();

    return api.lifestyle().data
}

export async function getProduct(id: string) {
    await delay();

    return api.getProduct(id).data
}
