import { createContext, useEffect, useState } from "react";

import Product from "../models/product";
import * as Service from '../service/cart'

type ContextProps = {
    processing: boolean
    cart: Product[]
    addToCart: (product: Product) => Promise<void> 
    removeFromCart: (product: Product) => Promise<void> 
    itsInTheCart: (product: Product) => boolean
}

const CartContext = createContext({} as ContextProps);

export function CartProvider(props: { children: JSX.Element }) {

    const [ cart, setCart ] = useState<Product[]>([]);
    const [ processing, setProcessing] = useState(false)

    useEffect(() => {
        getCart()
    }, [])

    async function getCart() {
        let list = await Service.getCart();

        setCart(
            list.map((product) => Product.parse(product))
)
    }

    async function addToCart(product: Product) {

        setProcessing(true);

        try {
            await Service.addToCart(product.id);
            await getCart();
        } catch(e) {
            console.log(e);
        } finally {
            setProcessing(false);
        }
    }

    async function removeFromCart(product: Product) {
        setProcessing(true);

        try {
            await Service.removeFromCart(product.id);
            await getCart();
        } catch(e) {
            console.log(e);
        } finally {
            setProcessing(false);
        }
    }

    function itsInTheCart(product: Product) {
        let itsPresent = false;

        for (let productInCart of cart) {
            if(productInCart.id == product.id) {
                itsPresent = true;
                break;
            }
        }

        return itsPresent;
    }

    return (
         <CartContext.Provider value={{
            processing,
            cart,
            addToCart,
            removeFromCart,
            itsInTheCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;

