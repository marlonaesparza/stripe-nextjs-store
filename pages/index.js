import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/shared-components/layout/Layout';


const Home = () => {
  return (
    <React.Fragment>
      
      <Head>
        <title>Home | Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/*Insert Home Components*/}
        <h1>Home Component</h1>
      </Layout>

    </React.Fragment>
  );
};


export default Home;