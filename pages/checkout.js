import React, { useContext, useEffect } from 'react';
import { CartContext } from './../contexts/CartContext';
import Head from 'next/head';
import Layout from './../components/shared-components/layout/Layout';
import CartSummary from '../components/cart/cart-summary/CartSummary';
import styles from './../styles/Checkout.module.css';


const Checkout = () => {
  const { updateState } = useContext(CartContext);
  useEffect(updateState, []);

  const { itemCount, total } = useContext(CartContext);

  return (
    <React.Fragment>
      
      <Head>
        <title>Checkout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <div className={styles.page_title_container}>
          <h2 className={styles.page_title}>Checkout Summary</h2>
        </div>
        <CartSummary />
      </Layout>

    </React.Fragment>
  );
};


export default Checkout;