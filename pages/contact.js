import React from 'react';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';


const Contact = () => {
  return (
    <React.Fragment>
      
      <Head>
        <title>Contact | Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/*Insert Contact Components*/}
        <h1>Contact Component</h1>
      </Layout>

    </React.Fragment>
  );
};


export default Contact;