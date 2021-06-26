import React from 'react';
import Image from 'next/image';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { title, price, imageUrl, quantity } = item;

  return (
    <div className={styles.cart_item}>

      <div className={styles.cart_item_left}>
        <div>
          <Image src={imageUrl} width='150' height='150'/>
        </div>
        <div className={styles.ci_name_price}>
          <h4>{ title }</h4>
          <p>${ price }</p>
        </div>
      </div>

      <div className={styles.cart_item_right}>
        <div className={styles.ci_quantity}>
          <p>{`Quantity: ${quantity}`}</p>
        </div>
        <div className={styles.ci_controls}>
          <button className={styles.ci_controls_increase}>+</button>
          {
            quantity === 1 ?
              <button className={styles.ci_controls_delete}>x</button> :
              quantity > 1 ?
                <button className={styles.ci_controls_decrease}>-</button> :
                null
          }
        </div>
      </div>

    </div>
  );
};


export default CartItem;