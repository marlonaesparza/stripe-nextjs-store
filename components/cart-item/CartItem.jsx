import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Image from 'next/image';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { title, price, imageUrl, quantity } = item;

  const {
    addToProductCount,
    subFromProductCount,
    removeItemFromCart,
    clearItemsFromCart
  } = useContext(CartContext);

  const addCount = () => {
    addToProductCount(item);
  };

  const subCount = () => {
    subFromProductCount(item);
  };

  const removeItem = () => {
    removeItemFromCart(item);
  };

  const clearItems = () => {
    clearItemsFromCart(item);
  };

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
          <button className={`button is-info ` + styles.ci_controls_increase} onClick={addCount}>+</button>
          {
            quantity === 1 ?
              <button className={`button is-danger ` + styles.ci_controls_delete} onClick={removeItem}>x</button> :
              quantity > 1 ?
                <button className={`button is-warning ` + styles.ci_controls_decrease} onClick={subCount}>-</button> :
                null
          }
        </div>
      </div>
    </div>
  );
};


export default CartItem;