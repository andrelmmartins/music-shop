import { Flex, FlexProps, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface CategoryProps extends FlexProps {
    name: string
    href: string
}

export default function Category({ name, href, ...rest} : CategoryProps) {
    return (
        <Link href={href} passHref>
            <ChakraLink width='100%'>

                <Flex
                    border='3px solid'
                    borderColor='black'

                    overflow='hidden'

                    borderRadius='10px'

                    justify='flex-end'
                    flexDirection='column'

                    height={['450px', '550px']}
                    minWidth='250px'
                    width='100%'

                    {...rest}

                    bgSize='cover'
                    bgPosition='center'
                >
                    
                    <Flex bg='black' height='50px' width='100%' align='center' justify='center'>
                        <Heading as='h4' color='gray' size='sm'>{name}</Heading>
                    </Flex>
                </Flex>
            </ChakraLink>
        </Link>
    )
}