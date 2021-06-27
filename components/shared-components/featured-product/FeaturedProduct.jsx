import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedProduct.module.css';
import isInCart from '../../../helpers/isInCart';


const FeaturedProduct = ({ product }) => {
  const { title, price, imageUrl, id } = product;
  const { cartItems, addProduct, addToProductCount } = useContext(CartContext);

  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className={styles.featured_product}>
          <div className={styles.fp_img_cont}>
            <Image src={imageUrl} width='250' height='250'className={styles.fp_img}/>
          </div>
          <div className={styles.fp_info}>
            <h3>{ title }</h3>
            <p>${ price }</p>
          </div>
        </div>
      </Link>
      <div className={styles.fp_interaction}>
        {
          isInCart(product, cartItems) ?
            <button className={'button is-black ' + styles.fp_btn} onClick={() => addToProductCount(product)}>ADD MORE</button> :
            <button className={'button is-light ' + styles.fp_btn} onClick={() => addProduct(product)}>ADD</button>
        }
      </div>
    </div>
  );
};


export default FeaturedProduct;