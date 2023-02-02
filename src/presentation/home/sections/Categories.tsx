import { Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Category from "../../../components/Category";

export default function Categories() {
    return (
        <Flex as='section' width='100%' paddingY={['40px', '50px']} bg='white' alignItems='center'>
            <Container>
                <Heading as='h2' color='black' fontSize={['18', '22']} marginBottom={['40px', '50px']}>Chegamos para ficar!</Heading>

                <HStack justify='space-between' spacing={['3', '4']} width='100%' whiteSpace='nowrap' overflowX='scroll'>
                    <Category href='/products?s=guitars' name="Violões" bg='url(/guitar.png)' />
                    <Category href='/products?s=bags' name="Bags" bg='url(/bags.png)' />
                    <Category href='/products?s=lifestyle' name="LifeStyle" bg='url(/lifestyle.png)' />
                    <Category href='/products?s=assets' name="Assets" bg='url(/assets.png)' />
                </HStack>

                <Text color='gray' marginTop='20px' fontSize={['12px', 'sm']} lineHeight={['15px', '18px']}>*Nós não produzimos violões e bags! Nós traduzimos sentimentos de pessoas por música e seus instrumentos assim como você.</Text>
            </Container>
        </Flex>
    )
}