import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProduct.module.css';


const FeaturedProduct = ({ product }) => {
  const { title, price, imageUrl } = product;

  return (
    <div className={styles.featured_product}>
      <div className={styles.fp_img_cont}>
        <Image src={imageUrl} width='250' height='250'className={styles.fp_img}/>
      </div>
      <div className={styles.fp_info}>
        <h3>{ title }</h3>
        <p>${ price }</p>
      </div>
      <div className={styles.fp_interaction}>
        <button className={'button is-black ' + styles.fp_btn}>ADD</button>
      </div>
    </div>
  );
};


export default FeaturedProduct;