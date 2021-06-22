import React from 'react';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';


const Gallery = () => {
  return (
    <React.Fragment>
      
      <Head>
        <title>Gallery | Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/*Insert Gallery Components*/}
        <h1>Gallery Component</h1>
      </Layout>

    </React.Fragment>
  );
};


export default Gallery;