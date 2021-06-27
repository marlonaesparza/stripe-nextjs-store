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

  const subFromProductCount = (product) => {
    dispatch({type: 'SUB_ITEM_COUNT', payload: product});
  };

  const removeItemFromCart = (product) => {
    dispatch({type: 'REM_ITEM_CART', payload: product});
  };

  const clearItemsFromCart = () => {
    dispatch({type: 'CLEAR_ITEMS_CART'});
  };

  const updateState = () => {
    dispatch({type: 'UPDATE_STATE'});
  };

  const contextValues = {
    ...state,
    addProduct,
    addToProductCount,
    subFromProductCount,
    removeItemFromCart,
    clearItemsFromCart,
    updateState
  };

  return (
    <CartContext.Provider value={{...contextValues}}>
      { children }
    </CartContext.Provider>
  );
};


export default CartContextProvider;
export { CartContext };