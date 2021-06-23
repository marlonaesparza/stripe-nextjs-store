import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      {`${year} ${String.fromCharCode(169)} DEMO`}
    </div>
  );
};


export default Footer;