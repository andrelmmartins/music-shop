import { Container, Flex, Heading, Stack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function CallToAction() {
    return (
        <Flex
            as='section'
            width='100%'
            height='90vh'
            minHeight='480px'
            maxHeight='640px'
            alignItems='center'
            bg='linear-gradient(135deg,#141414 30%, #14141455), url(/caio-silva-C7RFkKvThG4-unsplash.jpg)'
            bgSize='cover'
            bgPosition={[ 'center' ]}
        >
            <Container>
                <Stack spacing='2'>
                    <Heading as='h1' maxWidth='500px' size={['xl', '2xl']} marginBottom='5'>Queremos te inspirar a ir muito além dos seus limites!</Heading>
                    <Link href='#' passHref>
                        <ChakraLink bgGradient='linear(to-r, blue, red 50%)' bgClip='text' fontSize={['md','xl']} width='fit-content' fontWeight='bold'>Clique e conheça nossa coleção!</ChakraLink>
                    </Link>
                    <Flex bgGradient='linear(to-r, blue, red 120%)' height='3px' width='100px'/>
                </Stack>
            </Container>
        </Flex>
)
}