import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartContextProvider from '../contexts/CartContext';
import '../styles/global.css';


const StripePromise = loadStripe(`${process.env.STRIPE_PUB_KEY}`);

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartContextProvider>
      <Elements stripe={StripePromise}>
        <Component {...pageProps} />  
      </Elements>
    </CartContextProvider>
  );
};


export default MyApp;