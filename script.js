const cart = []; // To store cart items

// Function to add an item to the cart
function addToCart(item, price) {
  cart.push({ item, price }); // Add item to the cart array
  updateCartCount();
  alert(`${item} added to cart!`);
}

// Function to update the cart count in the navbar
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}
