const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0) || 0,
    total: cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0) || 0
  };
};


export default sumItems;