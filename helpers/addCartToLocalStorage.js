const addCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};


export default addCartToLocalStorage;