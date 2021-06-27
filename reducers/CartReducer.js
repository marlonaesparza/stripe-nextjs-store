import isInCart from "../helpers/isInCart";
import sumItems from "../helpers/sumItems";
import addCartToLocalStorage from "../helpers/addCartToLocalStorage";

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!isInCart(action.payload, state.cartItems)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      };

      addCartToLocalStorage([...state.cartItems]);
      
      return {
        cartItems: [...state.cartItems],
        ...sumItems([...state.cartItems])
      };

    case 'ADD_ITEM_COUNT':
      let addCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        };
        return item;
      });

      addCartToLocalStorage([...addCartItems]);

      return {
        cartItems: addCartItems,
        ...sumItems(addCartItems)
      };

    case 'SUB_ITEM_COUNT':
      let subCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= 1;
        };
        return item;
      });

      addCartToLocalStorage([...subCartItems]);

      return {
        cartItems: subCartItems,
        ...sumItems(subCartItems)
      };
    
    case 'REM_ITEM_CART':
      let remCartItems = state.cartItems.filter((item) => {
        if (!(item.id === action.payload.id)) {
          return item;
        };
      });

      addCartToLocalStorage([...remCartItems]);

      return {
        cartItems: remCartItems,
        ...sumItems(remCartItems)
      };
    
    case 'CLEAR_ITEMS_CART':
      localStorage.removeItem('cart');

      return {
        cartItems: [],
        itemCount: 0,
        total: 0
      };

    case 'UPDATE_STATE':
      let localCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
      return {
        cartItems: localCartItems,
        ...sumItems(localCartItems)
      }
    default:
      return state;
  };
};


export default cartReducer;