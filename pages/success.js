import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './../components/shared-components/layout/Layout';
import styles from './../styles/Success.module.css';

const Success = () => {
  const { clearItemsFromCart } = useContext(CartContext);
  useEffect(clearItemsFromCart, []);

  return (
    <React.Fragment>
      <Head>
        <title>Successful Purchase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <div className={styles.page_title_cont}>
          <h1 className={styles.page_title}>Transaction Successful</h1>
        </div>
        <div className={styles.page_desc_cont}>
          <p className={styles.page_desc}>Payment was successful, thank you.</p>
        </div>
        <div className={styles.page_controls}>
          <Link href='/shop'>
            <button className='button is-black'>Continue Shopping</button>
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  );
};


export default Success;