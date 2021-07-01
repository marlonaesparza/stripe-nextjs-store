import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './../contexts/CartContext';
import Head from 'next/head';
import { useStripe } from '@stripe/react-stripe-js';
import Layout from './../components/shared-components/layout/Layout';
import CartSummary from '../components/cart/cart-summary/CartSummary';
import createACheckout from '../helpers/createACheckout';
import styles from './../styles/Checkout.module.css';


const Checkout = () => {
  const { updateState } = useContext(CartContext);
  useEffect(updateState, []);

  const { cartItems } = useContext(CartContext);
  const [customerEmail, setCustomerEmail] = useState('');

  const Stripe = useStripe();

  const handleCheckout = async (e) => {
    e.preventDefault();

    const customer_email = e.target.email.value;
    const line_items = cartItems.map(item => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl]
          }
        }
      };
    });

    const sessionId = await createACheckout({
      line_items,
      customer_email
    });

    const { error } = await Stripe.redirectToCheckout({
      sessionId
    });

    if (error) {
      // Create error component to inform user
      console.log(error);
    };
  };

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
        <form onSubmit={handleCheckout} className={styles.checkout_form}>
          <div className={styles.form_email_section}>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              name='email' 
              value={customerEmail}
              required
              onChange={(e) => setCustomerEmail(e.target.value)}
              className={styles.email_input}
            />
          </div>
          <div className={styles.form_submit_section}>
            <input type='submit' value='Checkout' className='button is-black' />
          </div>
        </form>
      </Layout>

    </React.Fragment>
  );
};


export default Checkout;