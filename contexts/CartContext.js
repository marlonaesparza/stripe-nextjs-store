import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/CartReducer';


const CartContext = createContext();

const cartInitalState = {
  cartItems: [],
  itemCount: 0,
  total: 0
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitalState);

  const addProduct = (product) => {
    dispatch({type: 'ADD_ITEM', payload: product});
  };

  const addToProductCount = (product) => {
    dispatch({type: 'ADD_ITEM_COUNT', payload: product});
  };

  const contextValues = {
    ...state,
    addProduct,
    addToProductCount
  };

  return (
    <CartContext.Provider value={{...contextValues}}>
      { children }
    </CartContext.Provider>
  );
};


export default CartContextProvider;
export { CartContext };