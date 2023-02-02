import { Container, Flex, FlexProps, Image } from "@chakra-ui/react";
import Cart from "./Cart";
import Social from "./Social";

export default function ShopHeader(props: FlexProps) {

    return(
        <Flex
          as='header'
          width='100%'
          height='100px'
          justify='center'
          align='center'
          position='sticky'
          top='0'

          borderBottom='1px solid'
          borderColor='white'

          zIndex='10'

          backdropFilter='blur(6px)'
          
          {...props}
        >

            <Container position='relative'>
                <Flex justify='center' align='center'>
                    <Social position='absolute' left='0'/>
                    
                    <Image src='/logo-black.svg' height={['40px', '45px']} paddingY={['10px', '10px', '7px']} width={['40px', '45px', '200px']} bg='whiteGlass' borderRadius='full' />
                    
                    <Cart position='absolute' right='0'/>
                </Flex>
            </Container>

        </Flex>
    )    
}