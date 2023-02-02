import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { ProductType } from '../models/product'
import Page from '../presentation/products'

type PageProps = {
  type?: ProductType
}

const Products: NextPage = ( props : PageProps ) => {
  return (
    <>

      <Head>
        <title>Music Shop</title>
      </Head>

      <Page type={props.type}/>

    </>
  )
}

export default Products

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const type = context.query.s;

    if(type != 'guitars' && type != 'bags' && type != 'lifestyle' && type != 'assets') {
        return {
            notFound: true
        }
    }
    
    return {
        props: {
          type
        }
    }
}