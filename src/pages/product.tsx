import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { isArray } from 'util'

import ProductModel from '../models/product'

import Page from '../presentation/product'
import { getProduct } from '../service/products'

type PageProps = {
  product?: ProductModel
}

const Product: NextPage = ( props : PageProps ) => {
  
  let product = null;

  if( props.product) {
    product = ProductModel.parse(props.product)
  }

  const title = (product?.name || 'Produto') + ' | Music Shop'
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      { product ? <Page product={product}/> : null }
    </>
  )
}

export default Product

export const getServerSideProps: GetServerSideProps = async (context) => {
    
  const { id } = context.query;

  if(!id || isArray(id)) {
    return {
        notFound: true
    }
  }    
  
  const product = await getProduct(id);

  if(!product) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product
    }
  }
}