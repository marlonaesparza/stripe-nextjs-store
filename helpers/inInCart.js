const isInCart = (product, cartItems) => {
  return cartItems.find((item) => {
    return item.id === product.id;
  });
};

export default isInCart;