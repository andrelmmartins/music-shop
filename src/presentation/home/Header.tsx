import { Container, Flex, FlexProps, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import Social from "../../components/Social";

export default function Header(props: FlexProps) {
    
    return (
        <Flex
          as='header'
          width='100%'
          minHeight={['70px', '100px']}
          justify='center'
          align='center'
          
          borderBottom='1px'
          borderColor='gray'

          position='sticky'
          top='0'

          zIndex='10'

          backdropFilter='blur(6px)'
          
          {...props}
        >

            <Container position='relative'>
                <Flex justify='center' align='center'>

                    <Link href='#' passHref>
                        <ChakraLink position='absolute' left='0' display={['none', 'none', 'block']} bgGradient='linear(to-r, blue, red 50%)' bgClip='text' width='fit-content' fontFamily='Dela Gothic One' fontWeight='normal'>Garanta o seu!</ChakraLink>
                    </Link>
                    
                    <Image src='/logo.svg' height={['40px', '45px']} paddingY={['10px', '10px', '7px']} width={['40px', '45px', '200px']} bg='black' borderRadius='full' />

                    <Social position='absolute' right='0' display={['none', 'flex']} />
                </Flex>
            </Container>

        </Flex>
    )    
}