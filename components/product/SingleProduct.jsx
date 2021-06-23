import React from 'react';
import Image from 'next/image';
import styles from './SingleProduct.module.css';


const SingleProduct = ({ product }) => {
  const { title, price, imageUrl, description } = product;

  return (
    <div className={styles.product}>
      <div className={styles.p_img_cont}>
        <Image src={imageUrl} width='250' height='250'className={styles.fp_img}/>
      </div>
      <div className={styles.p_info}>
        <h3>{ title }</h3>
        <p>${ price }</p>
      </div>
      <div className={styles.p_interaction}>
        <button className={'button is-black ' + styles.p_btn}>ADD TO CART</button>
        <button className={'button is-primary ' + styles.p_btn}>CHECKOUT</button>
      </div>
      <div className={styles.p_details}>
        <h4>Description</h4>
        <p className={styles.p_description}>{ description }</p>
      </div>
    </div>
  );
};


export default SingleProduct;