import type { NextPage } from 'next'
import Head from 'next/head'

import Page from '../presentation/home'

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Music Shop</title>
      </Head>

      <Page />

    </>
  )
}

export default Home
