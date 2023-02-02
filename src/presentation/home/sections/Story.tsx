import { Container, Flex, Heading, Image, Stack, Text, TextProps } from "@chakra-ui/react";

export default function Story() {

    const textStyle : TextProps = {
        fontSize: [ '14px', '16px'],
        lineHeight: '18px',
        color: 'gray'
    }

    return (
        <Flex as='section' width='100%' paddingY={['60px', '100px']} bg='white' alignItems='center'>
            <Container>
                <Flex flexDirection={['column', 'column', 'row']} gap={['30px', '50px']}>
                    
                    <Flex position='relative'>
                        <Image src='/asterisk.svg' width='35px' position='absolute' top='0' left='0'/>
                        <Flex border='3px solid' borderColor='black' width={['100%', '320px']} height='400px' borderRadius='200px 10px 10px 10px' bg='linear-gradient(#14141455 50%, #141414), url(/pexels-cottonbro-4088014.jpg)' bgSize='cover'/>
                    </Flex>

                    <Stack flexDirection='column' spacing='3' justify='center'>
                        <Heading color='black' fontSize={['18px', '20px']} marginBottom={['10px', '20px']}>Quem somos?<br/>De onde viemos?</Heading>
                        <Text {...textStyle}>Viemos de longe...</Text>
                        <Text {...textStyle}>Aprendizes de Hefesto - Deus da Tecnologia, dos ferreiros, artesãos, escutores e tudo aquilo que há força e criatividade. Nascemos do fogo e da floresta!</Text>
                        <Text {...textStyle}>Em uma noite tempestuosa, nosso lider acordou com um sonho futuristico de poderosos violões que encatavam os ouvidos do mundo. Nisto encontramos nosso desejo e o realizamos!</Text>
                        <Text {...textStyle}>Chegamos a produzir instrumentos para grandes artistas como: Biliu de Campina, Fubica da Viola e Zé da Timba!</Text>
                        <Text {...textStyle}>Hoje nossa produção está acontecendo em um dos centros mais movimentado do mundo, a Feira da Prata, e a venda no mais alto comércio da sociedade: A Feita de Troca! </Text>
                    </Stack>

                </Flex>
            </Container>
        </Flex>
    )
}