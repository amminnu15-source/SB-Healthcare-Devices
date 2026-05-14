const checkoutItems = document.getElementById("checkoutItems");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutTotal = document.getElementById("checkoutTotal");
const checkoutForm = document.getElementById("checkoutForm");

const paymentCards = document.querySelectorAll(".payment-card");
const paymentBoxes = document.querySelectorAll(".payment-box");

let checkoutCart = JSON.parse(localStorage.getItem("cart")) || [];

function formatPrice(price){
  return "₹" + Number(price).toLocaleString("en-IN");
}

function showPaymentBox(paymentValue){
  paymentBoxes.forEach(box => box.classList.remove("active"));

  if(paymentValue === "Cash on Delivery"){
    document.getElementById("codBox").classList.add("active");
  }

  if(paymentValue === "UPI"){
    document.getElementById("upiBox").classList.add("active");
  }

  if(paymentValue === "Card Payment"){
    document.getElementById("cardBox").classList.add("active");
  }
}

paymentCards.forEach(card => {
  card.addEventListener("click", () => {
    paymentCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");

    const radio = card.querySelector("input[type='radio']");
    radio.checked = true;

    showPaymentBox(radio.value);
  });
});

function renderCheckout(){
  checkoutItems.innerHTML = "";

  if(checkoutCart.length === 0){
    checkoutItems.innerHTML = `
      <div class="checkout-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your cart is empty</h3>
        <p>Please add products before checkout.</p>
        <a href="products.html">Browse Products</a>
      </div>
    `;

    checkoutSubtotal.textContent = "₹0";
    checkoutTotal.textContent = "₹0";

    const btn = checkoutForm.querySelector(".place-order-btn");
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";

    return;
  }

  let subtotal = 0;

  checkoutCart.forEach(item => {
    const qty = item.quantity || 1;
    const itemTotal = Number(item.price) * qty;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.className = "checkout-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>Qty: ${qty}</p>
        <strong>${formatPrice(itemTotal)}</strong>
      </div>
    `;

    checkoutItems.appendChild(div);
  });

  checkoutSubtotal.textContent = formatPrice(subtotal);
  checkoutTotal.textContent = formatPrice(subtotal);
}

checkoutForm.addEventListener("submit", function(e){
  e.preventDefault();

  if(checkoutCart.length === 0){
    alert("Your cart is empty.");
    return;
  }

  const selectedPayment = document.querySelector("input[name='payment']:checked").value;

  if(selectedPayment === "UPI"){
    const upiId = document.getElementById("upiId").value.trim();

    if(upiId === ""){
      alert("Please enter your UPI ID.");
      return;
    }
  }

  if(selectedPayment === "Card Payment"){
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardExpiry = document.getElementById("cardExpiry").value.trim();
    const cardCvv = document.getElementById("cardCvv").value.trim();

    if(cardNumber === "" || cardExpiry === "" || cardCvv === ""){
      alert("Please fill all card details.");
      return;
    }
  }

  const order = {
    id:"SBH" + Date.now(),

    customer:{
      name:document.getElementById("fullName").value.trim(),
      phone:document.getElementById("phone").value.trim(),
      email:document.getElementById("email").value.trim(),
      address:document.getElementById("address").value.trim(),
      city:document.getElementById("city").value.trim(),
      state:document.getElementById("state").value.trim(),
      pincode:document.getElementById("pincode").value.trim()
    },

    payment:selectedPayment,
    items:checkoutCart,
    total:checkoutTotal.textContent,
    date:new Date().toLocaleString()
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("lastOrder", JSON.stringify(order));
  localStorage.removeItem("cart");

  alert("Order placed successfully!");

  window.location.href = "success.html";
});

showPaymentBox("Cash on Delivery");
renderCheckout();