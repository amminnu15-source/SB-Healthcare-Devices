const cartItemsContainer = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatPrice(price){
  return "₹" + price.toLocaleString("en-IN");
}

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart(){
  cartItemsContainer.innerHTML = "";

  if(cart.length === 0){
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your cart is empty</h3>
        <p>Add medical equipment products to your cart and they will appear here.</p>
        <a href="products.html">Browse Products</a>
      </div>
    `;

    cartSubtotal.textContent = "₹0";
    cartTotal.textContent = "₹0";
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    const qty = item.quantity || 1;
    const itemTotal = item.price * qty;

    subtotal += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">

      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>${formatPrice(item.price)}</p>
      </div>

      <div class="cart-actions">
        <div class="qty-box">
          <button onclick="decreaseQty(${index})">−</button>
          <span>${qty}</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  cartSubtotal.textContent = formatPrice(subtotal);
  cartTotal.textContent = formatPrice(subtotal);
}

function increaseQty(index){
  cart[index].quantity = (cart[index].quantity || 1) + 1;
  saveCart();
  renderCart();
}

function decreaseQty(index){
  if((cart[index].quantity || 1) > 1){
    cart[index].quantity -= 1;
  }else{
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeItem(index){
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

renderCart();







const checkoutBtn = document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0){
    alert("Your cart is empty. Please add products first.");
    return;
  }

  window.location.href = "checkout.html";
});