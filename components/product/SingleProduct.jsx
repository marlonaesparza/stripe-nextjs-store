import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SingleProduct.module.css';
import isInCart from '../../helpers/inInCart';


const SingleProduct = ({ product }) => {
  const { title, price, imageUrl, description } = product;
  const { cartItems, addProduct, addToProductCount } = useContext(CartContext);

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
        {
          isInCart(product, cartItems) ?
            <button className={'button is-black ' + styles.p_btn} onClick={() => addToProductCount(product)}>ADD MORE</button> :
            <button className={'button is-light ' + styles.p_btn} onClick={() => addProduct(product)}>ADD</button>
        }
        <Link href='/cart'>
          <button className={'button is-primary ' + styles.p_btn}>CHECKOUT</button>
        </Link>
      </div>
      <div className={styles.p_details}>
        <h4>Description</h4>
        <p className={styles.p_description}>{ description }</p>
      </div>
    </div>
  );
};


export default SingleProduct;