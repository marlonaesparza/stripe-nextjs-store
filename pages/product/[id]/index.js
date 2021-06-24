import React from 'react';
import Error from 'next/error';
import Layout from '../../../components/shared-components/layout/Layout';
import SingleProduct from '../../../components/product/SingleProduct';
import { readFile } from 'fs/promises';
import path from 'path';


const Product = ({ product }) => {
  if (!product) {
    return (
      <React.Fragment>
        <Layout>
          <Error statusCode={404}/>
        </Layout>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Layout>
        <SingleProduct product={product}/>
      </Layout>
    </React.Fragment>
  );
};

const getStaticProps = async (context) => {
  const { id } = context.params;

  const filePath = path.join(process.cwd(), '/shop/testData.json');
  const fileContent = await readFile(filePath, {
    encoding: 'utf-8'
  });

  const products = JSON.parse(fileContent);
  const singleProduct = products.filter((p) => {
    return p.id === Number(id);
  });
  const product = singleProduct[0] || null;

  return {
    props: {
      product
    }
  };
};

const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), '/shop/testData.json');
  const fileContent = await readFile(filePath, {
    encoding: 'utf-8'
  });

  const products = JSON.parse(fileContent);
  const paths = products.map(({ id }) => {
    return {
      params: { id: id.toString() }
    }
  });

  return {
    paths,
    fallback: true
  }
};


export default Product;
export { getStaticProps, getStaticPaths };