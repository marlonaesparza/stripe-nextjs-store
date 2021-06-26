import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Head from 'next/head';
import Layout from '../components/shared-components/layout/Layout';
import CartItem from '../components/cart-item/CartItem';
import styles from '../styles/Cart.module.css';


const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <React.Fragment>
      <Head>
        <title>Cart | Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <h1 className={styles.page_title}>Cart</h1>
        {
          cartItems.length > 0 ?
            <div>
              {cartItems.map((item) => {
                return <CartItem item={item} id={item.id}/>
              })}
            </div> :
            <p>Your cart is empty.</p>
        }
      </Layout>
    </React.Fragment>
  );
};


export default Cart;