import isInCart from "../helpers/inInCart";


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!isInCart(action.payload, state.cartItems)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      };
      
      return {
        cartItems: [...state.cartItems],
        itemCount: state.cartItems.reduce((count, item) => {
          return count + item.quantity;
        }, 0),
        total: state.cartItems.reduce((total, item) => {
          return total + (item.price * item.quantity);
        }, 0)
      };

    case 'ADD_ITEM_COUNT':
      const cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        };

        return item;
      });

      return {
        cartItems,
        itemCount: cartItems.reduce((count, item) => {
          return count + item.quantity;
        }, 0),
        total: cartItems.reduce((total, item) => {
          return total + (item.price * item.quantity);
        }, 0)
      };
    default:
      return state;
  };
};


export default cartReducer;