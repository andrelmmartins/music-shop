import { Button, Container, Flex, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import Footer from "../../components/Footer";
import Product from "../../components/Product";
import ShopHeader from "../../components/ShopHeader";
import WhatsApp from "../../components/WhatsAppBallon";
import useCartContext from "../../hooks/useCartContext";
import useProductsContext from "../../hooks/useProductsContext";
import ProductModel from "../../models/product";
import { currency } from "../../utils/format";
import Images from "./Images";

type PageProps = {
    product: ProductModel
}

export default function Page( props: PageProps ) {

    const { products, loadProducts } = useProductsContext()
    const { addToCart, removeFromCart, itsInTheCart, processing } = useCartContext()

    const others = products.filter(element => element.id != props.product?.id)

    useEffect(() => {
        if(products.length == 0) {
            loadProducts(props.product?.type || '')
        }
    }, [])

    return (
        <Flex
            width='100%'
            height='100%'
            flexDirection='column'
            bg='white'
        >

            <ShopHeader />

            <Flex as='main' flexDirection='column' paddingY='50px' gap='100px'>
                
                <Container as='section'>
                    <Flex gap='50px' align='center'>
                        
                        <Images images={props.product?.images || []} />

                        <Stack spacing='20px'>
                            <Heading as='h1' color='black' size='3xl'>{props.product?.name}</Heading>
                            <Text color='black'>{props.product?.description}</Text>
                            <Heading as='h2' width='fit-content' bgGradient='linear(to-r, blue, red)' bgClip='text' size='lg'>{currency.format(props.product?.price || 0)}</Heading>
                            

                            { itsInTheCart(props.product) ?
                                <Button bg='white' border='1px solid' borderColor='black' color='black' fontSize='sm' height='55px' fontWeight='normal' isLoading={processing} onClick={() => removeFromCart(props.product)}>
                                    REMOVER DO CARRINHO
                                </Button>
                            :
                                <Button bg='black' isLoading={processing} height='55px' onClick={() => addToCart(props.product)}>
                                    Adicionar ao Carrinho
                                </Button>
                            }

                        </Stack>

                    </Flex>
                </Container>

                <Container as='section'>
                    <Heading as='h3' color='black' marginBottom='30px' size='lg'>Outras maravilhas:</Heading>

                    <Grid templateColumns='repeat(4, 1fr)' gap='20px'>
                        {
                            others.map((product, index) => {
                                if(index < 4) {
                                    return <Product product={product} key={'product-' + index}/>
                                }
                            })
                        }
                    </Grid>
                </Container>
            </Flex>

            <WhatsApp/>
            <Footer/>
        </Flex>
    )
}