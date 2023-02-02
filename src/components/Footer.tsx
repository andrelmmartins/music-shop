import Link from "next/link";
import { Container, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";

import Social from "./Social";

export default function Footer() {
    return (
        <Flex as='footer' width='100%' flexDirection='column' bg='black' paddingTop={['20px', '50px']} zIndex='2'>

            <Flex borderTop='1px solid' borderColor='gray' alignItems='center' height={['80px', '100px']} width='100%'>
                <Container>
                    <Flex justifyContent='space-between' flexDirection={['column', 'column', 'row']}  gap='7px'>
                        <Text color='gray' fontSize={['12px', '15px']} lineHeight={['12px', '15px']} fontWeight='bold' flexDirection='row'>Todos os direitos reservados © <Link href='/' passHref><ChakraLink fontFamily='Dela Gothic One'>Music Shop</ChakraLink></Link></Text>
                        <Social/>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}