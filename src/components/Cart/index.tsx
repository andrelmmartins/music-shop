import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FlexProps, useDisclosure } from "@chakra-ui/react";

import useCartContext from "../../hooks/useCartContext";
import { CartIcon } from "../../utils/icons";
import ProductCart from "./ProductCart";

export default function Cart(props: FlexProps) {

    const { cart } = useCartContext()
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex as='button' onClick={onOpen} align='center' justify='center' border='1px solid' borderColor='black' borderRadius='5px' width='40px' height='40px' {...props}>
                { cart.length != 0 ?
                    <Flex borderRadius='14px' align='center' justify='center' height='14px' width='14px' bgGradient='linear(to-r, blue, red 110%)' position='absolute' top='-5px' right='-5px' fontSize='8px' fontWeight='bold' paddingTop='1px'>{cart.length}</Flex>
                : null }
                <CartIcon fill='black'/>
            </Flex>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} closeOnEsc closeOnOverlayClick>
                <DrawerOverlay bg='glass' backdropFilter='blur(5px)' />
                
                <DrawerContent bg='white' boxShadow='none'>
                    <DrawerCloseButton color='white' top='15px'/>
                    <DrawerHeader bg='black'>Carrinho</DrawerHeader>

                    <DrawerBody padding='20px' overflowY='scroll'>
                        {
                            cart.map((product, index) => {
                                return <ProductCart product={product} key={'product-cart-' + index}/>
                            })
                        }
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
}