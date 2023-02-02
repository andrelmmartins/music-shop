import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

import Footer from "../../components/Footer";
import Product from "../../components/Product";
import ShopHeader from "../../components/ShopHeader";
import WhatsApp from "../../components/WhatsAppBallon";
import useProductsContext from "../../hooks/useProductsContext";

type PageProps = {
    type?: 'guitars' | 'bags' | 'lifestyle' | 'assets'
}

export default function Page( props: PageProps ) {

    const { products, loadProducts } = useProductsContext();

    useEffect(() => {
        loadProducts(props.type || '')
    }, [])

    return (
        <Flex
            width='100%'
            height='100%'
            flexDirection='column'
            bg='white'
        >

            <ShopHeader />

            <Flex as='main' flexDirection='column' paddingY='100px' gap='100px'>

                <Flex align='center'>
                    <Container>

                            <Heading as='h1' size='2xl' color='black' width='650px' bgGradient='linear(to-r, blue, red)' bgClip='text'>

                                {
                                    props.type == 'guitars' ? 'Nossos violões possuem o brilho do sol e uma profundidade no som do tamanho do universo.'
                                    : 'Estamos aqui para você' 
                                }
    
                            </Heading>

                    </Container>
                </Flex>

                <Flex as='section' width='100%' alignItems='center'>    
                    <Container>
                        <Grid templateColumns='repeat(4, 1fr)' gap='20px'>
                            {
                                products.map((product, index) => {
                                    return <Product key={'product-' + index} product={product}/>
                                })
                            }
                        </Grid>
                    </Container>
                </Flex>

            </Flex>

            <WhatsApp/>
            <Footer/>
        </Flex>
    )
}