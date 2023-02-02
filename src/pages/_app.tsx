import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'
import { ProductsProvider } from '../contexts/ProductsContext'
import { CartProvider } from '../contexts/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <ProductsProvider>
        <CartProvider>

      <Component {...pageProps} />
      
        </CartProvider>
      </ProductsProvider>
    </ChakraProvider>
  )
}

export default MyApp
