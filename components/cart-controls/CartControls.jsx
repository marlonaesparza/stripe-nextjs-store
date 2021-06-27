import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import styles from './CartControls.module.css';


const CartControls = () => {
  const {
    clearItemsFromCart
  } = useContext(CartContext);

  const clearItems = () => {
    clearItemsFromCart();
  };

  return (
    <div className={styles.cart_controls}>
      <div className={styles.cc_section}>
        <button className={`button is-black ` +styles.cc_clear_btn} onClick={clearItems}>
          CLEAR CART
        </button>
      </div>
      <div className={styles.cc_section}>
        <button className={`button is-primary ` + styles.cc_checkout_btn}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};


export default CartControls;