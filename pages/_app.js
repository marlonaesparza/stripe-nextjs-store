import CartContextProvider from '../contexts/CartContext';
import '../styles/global.css';


const MyApp = ({ Component, pageProps }) => {

  return (
    <CartContextProvider>
      <Component {...pageProps} />  
    </CartContextProvider>
  );
};


export default MyApp;