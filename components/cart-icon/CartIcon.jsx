import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import cartIcon from '../../assets/shopping-cart.png';
import styles from './CartIcon.module.css';


const CartIcon = () => {
  const {
    itemCount
  } = useContext(CartContext);

  return (
    <React.Fragment>
      <Link href='/cart'>
        <Image src={cartIcon} width='30' height='30'/>
      </Link>
      {itemCount > 0 ? <span className={styles.cart_count}> {itemCount} </span> : null}
    </React.Fragment>
  );
};


export default CartIcon;