import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import styles from './CartSummary.module.css';


const CartSummary = () => {
  const { total } = useContext(CartContext);

  return (
    <div className={styles.cart_summary}>
      <p className={styles.cart_total}>${ total } + shipping and taxes</p>
    </div>
  );
};


export default CartSummary;