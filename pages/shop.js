import React from 'react';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';
import FeaturedProduct from '../components/shared-components/featured-product/FeaturedProduct';
import { readFile } from 'fs/promises';
import path from 'path';
import styles from '../styles/Shop.module.css';


const Shop = ({ products }) => {
  const productItems = products.map((p) => {
    return <FeaturedProduct key={p.id} product={p}/>
  });

  return (
    <React.Fragment>
      
      <Head>
        <title>Shop | Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <section className={styles.products_section}>
          <h2 className={styles.ps_title}>Product List</h2>
          <div className={styles.ps_list}>
            { productItems }
          </div>
        </section>
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


export default Shop;
export { getStaticProps };