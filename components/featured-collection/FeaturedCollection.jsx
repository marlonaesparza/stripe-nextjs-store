import React from 'react';
import FeaturedProduct from '../shared-components/featured-product/FeaturedProduct';
import styles from './FeaturedCollection.module.css';


const FeaturedCollection = ({ products }) => {
  const productItems = products.filter((p, i) => {
    return i < 4;
  }).map((p) => {
    return <FeaturedProduct key={p.id} product={p}/>
  });

  return (
    <div className={styles.featured_collection}>
      <h2 className={styles.fc_title}>Featured Collection</h2>
      <div className={styles.fc_products}>
        { productItems }
      </div>
    </div>
  );
};


export default FeaturedCollection;