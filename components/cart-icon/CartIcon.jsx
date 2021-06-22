import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cartIcon from '../../assets/shopping-cart.png';
import styles from './CartIcon.module.css';


const CartIcon = () => {
  return (
    <React.Fragment>
      <Link href='/cart'>
        <Image src={cartIcon} width='30' height='30'/>
      </Link>
      <span className={styles.cart_count}> 1 </span>
    </React.Fragment>
  );
};


export default CartIcon;