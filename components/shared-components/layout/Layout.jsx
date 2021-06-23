import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header/>
        <main>
          { children }
        </main>
      <Footer/>
    </React.Fragment>
  );
};


export default Layout;