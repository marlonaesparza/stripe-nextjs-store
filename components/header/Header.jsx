import React from 'react';
import Link from 'next/link';
import CartIcon from './../cart/cart-icon/CartIcon';
import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        
        <div className={styles.header_left}>
          <Link href='/'>
            <a className={styles.nav_link}>Home</a>
          </Link>
        </div>

        <div className={styles.header_middle}>
          <div className='hn-shop'>
            <Link href='/shop'>
              <a className={styles.nav_link}>Shop</a>
            </Link>
          </div>
          <div className={styles.gallery}>
            <Link href='/gallery'>
              <a className={styles.nav_link}>Gallery</a>
            </Link>
          </div>
          <div className={styles.contact}>
            <Link href='/contact'>
              <a className={styles.nav_link}>Contact</a>
            </Link>
          </div>
        </div>

        <div className={styles.header_right}>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
};


export default Header;