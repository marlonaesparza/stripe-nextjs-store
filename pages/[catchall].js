import React from 'react';
import Error from 'next/error';
import Layout from '../components/shared-components/layout/Layout';


const CatchAll = () => {
  return (
    <React.Fragment>
      <Layout>
        <Error statusCode={404}/>
      </Layout>
    </React.Fragment>
  );
};


export default CatchAll;