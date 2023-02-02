import { CloseButton, Flex, Heading, Image } from "@chakra-ui/react";
import useCartContext from "../../hooks/useCartContext";
import Product from "../../models/product";
import { currency } from "../../utils/format";

interface Props {
    product: Product
}

export default function ProductCart(props: Props) {

    const { removeFromCart } = useCartContext()

    return (
        <Flex overflow='hidden' borderRadius='7px' border='1px solid' borderColor='black' flexDir='row' align='center'>
            <Image src={props.product.images[0]} height='60px' width='60px' objectFit='contain' bg='#fff' borderRight='1px solid' borderColor='black'/>
            
            <Flex paddingLeft='10px' flexDir='column' gap='5px' width='100%'>
                <Heading as='h4' size='xs' noOfLines={1} textOverflow='ellipsis' color='black'>{props.product.name}</Heading>
                <Heading as='h5' color='black' fontSize='10px' noOfLines={1} textOverflow='ellipsis'>{currency.format(props.product.price)}</Heading>
            </Flex>

            <CloseButton color='black' marginRight='10px' onClick={() => removeFromCart(props.product)}/>
        </Flex>
    )
}