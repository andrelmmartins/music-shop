import { Box, Flex, FlexProps, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props extends FlexProps {
    images: string[]
}

export default function Images({ images, ...rest}: Props) {
    
    const [ principal, setPrincipal ] = useState('');

    useEffect(() => {
        setPrincipal(images[0])
    }, [images])
    
    return (
        <Flex gap='5px' height='400px' width='500px' {...rest}>
            <Box display='flex' flexDir='column' gap='5px' width='100px' whiteSpace='nowrap' overflowY='scroll'>
                { 
                    images.map((url_image, index) => {
                        return <Image cursor='pointer' onClick={() => setPrincipal(url_image)} objectFit='cover' boxSize='75px' minW='75px' minH='75px' borderRadius='5px' src={url_image} key={'image-' + index}/>
                    })
                }
            </Box>

            <Image borderRadius='5px' objectFit='contain' bg='#fff' height='100%' width='400px' src={principal}/>
        </Flex>
    )
}