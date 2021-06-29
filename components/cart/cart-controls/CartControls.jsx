import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import Link from 'next/link';
import styles from './CartControls.module.css';


const CartControls = () => {
  const {
    clearItemsFromCart,
    cartItems
  } = useContext(CartContext);

  const clearItems = () => {
    clearItemsFromCart();
  };

  return (
    <div className={styles.cart_controls}>
      {
        cartItems.length > 0 ?
          <React.Fragment>
            <div className={styles.cc_section}>
              <button className={`button is-black ` +styles.cc_clear_btn} onClick={clearItems}>
                CLEAR CART
              </button>
            </div>
            <div className={styles.cc_section}>
              <Link href='/checkout'>
                <button className={`button is-primary ` + styles.cc_checkout_btn}>
                  CONTINUE TO CHECKOUT
                </button>
              </Link>
            </div>
          </React.Fragment> : null
      }
    </div>
  );
};


export default CartControls;