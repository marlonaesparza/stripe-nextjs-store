import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';
import CartItem from '../components/cart-item/CartItem';
import CartSummary from '../components/cart-summary/CartSummary';
import CartControls from '../components/cart-controls/CartControls';
import styles from '../styles/Cart.module.css';


const Cart = () => {
  const { updateState } = useContext(CartContext);
  useEffect(updateState, []);
  
  const { cartItems } = useContext(CartContext);

  return (
    <React.Fragment>
      <Head>
        <title>Cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <h1 className={styles.page_title}>Cart</h1>
        {
          cartItems.length > 0 ?
            <div>
              {cartItems.map((item) => {
                return <CartItem item={item} key={item.id}/>
              })}
            </div> :
            <p className={styles.empty_msg}>Your cart is empty.</p>
        }
        <CartSummary/>
        <CartControls/>
      </Layout>
    </React.Fragment>
  );
};


export default Cart;