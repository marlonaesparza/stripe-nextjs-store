import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {`${year} ${String.fromCharCode(169)} DEMO`}
    </footer>
  );
};


export default Footer;