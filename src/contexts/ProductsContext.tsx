import { createContext, useState } from "react";

import Product, { ProductObject } from "../models/product";
import { getGuitars } from "../service/products";

type ContextProps = {
    products: Product[],
    loadProducts: (type: string) => Promise<void>
}

const ProductsContext = createContext({} as ContextProps);

export function ProductsProvider(props: { children: JSX.Element }) {

    const [ products, setProducts ] = useState<Product[]>([]);

    async function loadProducts( type: string ) {
        
        let loaded : ProductObject[]  = [];
        
        switch (type) {
            case 'guitars' : loaded = await loadGuitars()
            case 'bags' : loaded = await loadBags()
            case 'lifestyle' : loaded = await loadLifestyle()
            case 'assets' : loaded = await loadAssets()
        }

        setProducts(
            loaded.map(product => Product.parse(product))
        )
    }

    async function loadGuitars() {
        return await getGuitars()
    }

    async function loadBags() {
        return await getGuitars()
    }

    async function loadAssets() {
        return await getGuitars()
    }

    async function loadLifestyle() {
        return await getGuitars()
    }

    return (
         <ProductsContext.Provider value={{
            products,
            loadProducts
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;

