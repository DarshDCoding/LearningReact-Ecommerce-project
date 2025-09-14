export function totalQuantity(cart) {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return totalQuantity;
}

// I am so frustrateddddd why the hell i created this when i can get the data form backend.