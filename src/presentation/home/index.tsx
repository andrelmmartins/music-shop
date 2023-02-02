import { Flex } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "./Header";
import WhatsApp from "../../components/WhatsAppBallon";
import CallToAction from "./sections/CallToAction";
import Categories from "./sections/Categories";
import Story from "./sections/Story";

export default function Page() {

    return (
        <Flex
            width='100%'
            height='100%'
            flexDirection='column'
        >
            <Header/>

            <Flex as='main' flexDirection='column'>
                <CallToAction/>
                <Categories/>
                <Story/>
                <WhatsApp/>
            </Flex>

            <Footer/>
    
        </Flex>
    )
}