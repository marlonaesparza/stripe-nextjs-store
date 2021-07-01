import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import styles from './CartSummary.module.css';


const CartSummary = () => {
  const { total, itemCount } = useContext(CartContext);

  return (
    <div className={styles.cart_summary}>
      {
        itemCount > 0 ?
          <React.Fragment>
            <p className={styles.item_count}>Item Count: {itemCount}</p>
            <p className={styles.cart_total}>Costs: ${ total } + shipping and taxes</p>
          </React.Fragment> :
          null
      }
    </div>
  );
};


export default CartSummary;