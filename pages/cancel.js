import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './../components/shared-components/layout/Layout';
import styles from './../styles/Cancel.module.css';


const Cancel = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Canceled Purchased</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <main className={styles.page_main}>
          <div className={styles.page_title_cont}>
            <h1 className={styles.page_title}>Transaction Canceled</h1>
          </div>
          <div className={styles.page_desc_cont}>
            <p className={styles.page_desc}>Payment was not successful.</p>
          </div>
          <div className={styles.page_controls}>
            <Link href='/shop'>
              <button className='button is-black'>Continue Shopping</button>
            </Link>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};


export default Cancel;