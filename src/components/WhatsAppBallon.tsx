import Link from "next/link";
import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { WhatsappIcon } from "../utils/icons";

export default function WhatsApp() {
    return (
        <Link href='https://whatsapp.com/' passHref>
            <ChakraLink>
                <Flex bg='black' height={['40px', '45px']} width={['40px', '45px']} align='center' justify='center'  borderRadius='5' position='fixed' bottom='30px' right='20px' zIndex='1'>
                    <WhatsappIcon height='18px' width='18px'/>
                </Flex>
            </ChakraLink>
        </Link> 
    )    
}