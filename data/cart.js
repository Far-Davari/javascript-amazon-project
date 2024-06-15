export const cart = [];

export function addToCart(productId) {
  let matchingItem;
  const count = document.querySelector(`.js-quantity-selector-${productId}`);
  const countValue = count.value;
  const quantity = Number(countValue);

  cart.forEach(cartItem => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}