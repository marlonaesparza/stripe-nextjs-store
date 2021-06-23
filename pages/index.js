import React from 'react';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';
import FeaturedCollection from '../components/featured-collection/FeaturedCollection';
import { readFile } from 'fs/promises';
import path from 'path';


const Home = ({ products }) => {
  return (
    <React.Fragment>
      
      <Head>
        <title>Home | Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <FeaturedCollection products={products}/>
      </Layout>

    </React.Fragment>
  );
};

const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), '/shop/testData.json');
  const fileContent = await readFile(filePath, {
    encoding: 'utf-8'
  });
  const products = JSON.parse(fileContent);

  return {
    props: {
      products
    }
  };
};


export default Home;
export { getStaticProps };