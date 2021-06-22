import React from 'react';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';


const Shop = () => {
  return (
    <React.Fragment>
      
      <Head>
        <title>Shop | Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/*Insert Shop Components*/}
        <h1>Shop Component</h1>
      </Layout>

    </React.Fragment>
  );
};


export default Shop;