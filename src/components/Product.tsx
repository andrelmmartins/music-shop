import { Box, Button, Flex, GridItem, GridItemProps, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Link from "next/link";
import useCartContext from "../hooks/useCartContext";

import ProductModel from "../models/product";
import { currency } from "../utils/format";

interface ProductProps extends GridItemProps {
    product: ProductModel
}

export default function Product({ product, ...rest }: ProductProps) {

    const { addToCart, removeFromCart, itsInTheCart, processing} = useCartContext()

    return (
        <GridItem {...rest}>
            <LinkBox as='article'>
                <Flex width='100%' padding='20px' border='1px solid' borderColor='gray' borderRadius='10px' flexDirection='column' gap='20px'>

                    <Heading as='h3' color='black' fontSize='18px' textOverflow='ellipsis' noOfLines={1}>{product.name}</Heading>

                    <Box height='150px' bg={`url(${product?.images[0]})`} bgRepeat='no-repeat' bgSize='contain' bgPosition='center' blendMode='multiply' />

                    <Heading as='h4' color='black' fontSize='15px'>{currency.format(product.price)}</Heading>

                    { itsInTheCart(product) ?
                        <Button height='45px' bg='white' border='1px solid' borderColor='black' color='black' fontSize='11px' fontWeight='normal' isLoading={processing} onClick={() => removeFromCart(product)}>REMOVER DO CARRINHO</Button>

                    :
                        <Button height='45px' bgGradient='linear(to-r, blue -20%, red)' fontSize='11px' fontWeight='normal' isLoading={processing} onClick={() => addToCart(product)}>ADICIONAR AO CARRINHO</Button>
                    }

                    <Link href={`/product?id=${product.id}`} passHref>
                        <LinkOverlay color='gray' display='flex' alignItems='center' justifyContent='center' borderRadius='5px' fontSize='11px'>VER PRODUTO</LinkOverlay>
                    </Link>
                </Flex>
            </LinkBox>
        </GridItem>
    )
}