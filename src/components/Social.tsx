import { HStack, Link as ChakraLink, StackProps} from "@chakra-ui/react";
import Link from "next/link";
import { SpotifyIcon, FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "../utils/icons";

export default function Social(props: StackProps) {
    return (
        <HStack spacing={['3', '4']} {...props}>
            <Link href='https://open.spotify.com/' target='_blank' passHref><ChakraLink><SpotifyIcon width={['13px', '15px']} /></ChakraLink></Link>
            <Link href='https://youtube.com/' target='_blank' passHref><ChakraLink><YoutubeIcon /></ChakraLink></Link>
            <Link href='https://instagram.com/' target='_blank' passHref><ChakraLink><InstagramIcon width={['13px', '15px']}/></ChakraLink></Link>
            <Link href='https://facebook.com/' target='_blank' passHref><ChakraLink><FacebookIcon width={['13px', '15px']}/></ChakraLink></Link>
            <Link href='https://whatsapp.com/' target='_blank' passHref><ChakraLink><WhatsappIcon width={['13px', '15px']}/></ChakraLink></Link>
        </HStack>
    )
}