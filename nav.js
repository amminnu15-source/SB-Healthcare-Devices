 function toggleDrop(id) {
    // Close all other dropdowns
    document.querySelectorAll('.dropdown, .top-dropdown').forEach(function(d) {
      if (d.id !== id) d.classList.remove('open');
    });
    // Toggle current
    document.getElementById(id).classList.toggle('open');
  }

  // Close on outside click
  document.addEventListener('click', function(e) {
    var insideDropBtn = e.target.closest('[onclick]');
    var insideDrop = e.target.closest('.dropdown') || e.target.closest('.top-dropdown');
    if (!insideDropBtn && !insideDrop) {
      document.querySelectorAll('.dropdown, .top-dropdown').forEach(function(d) {
        d.classList.remove('open');
      });
    }
  });
  
 /* PRODUCTS */

const products = [
  { name: "Oxygen Concentrator", page: "oxygen-concentrator.html" },
  { name: "BiPAP Machine & BiPAP Ventilator", page: "bipap-machine.html" },
  { name: "CPAP Machine", page: "cpap-machine.html" },
  { name: "Nebulizer Machine", page: "nebulizer-machine.html" },
  { name: "Hearing Aid", page: "hearing-aid.html" },
  { name: "Wheelchair", page: "wheelchair.html" },
  { name: "Breast Feeding Pump", page: "breast-feeding-pump.html" },
  { name: "Sleep Test Machine", page: "sleep-test-machine.html" },
  { name: "Insulin Pump", page: "insulin-pump.html" },
  { name: "Stair Climbing Wheelchair", page: "stair-climbing-wheelchair.html" },
  { name: "Commode Chair", page: "commode-chair.html" },
  { name: "Crutches", page: "crutches.html" },
  { name: "Feno Test Machine", page: "feno-test-machine.html" },
  { name: "Air Purifier", page: "air-purifier.html" },
  { name: "Cough Assist Machine", page: "cough-assist-machine.html" },
  { name: "BiPAP & CPAP Machine", page: "bipap-cpap-machine.html" },
  { name: "Health & Personal Care", page: "health-personal-care.html" },
  { name: "Fitness Equipment", page: "fitness-equipment.html" },
  { name: "Step Counter/Pedometer", page: "step-counter.html" },
  { name: "Massager", page: "massager.html" },
  { name: "Body Care", page: "body-care.html" },
  { name: "Mobile Aid", page: "mobile-aid.html" },
  { name: "Oxygen Concentrator Accessories", page: "oxygen-concentrator-accessories.html" },
  { name: "Walking Sticks", page: "walking-sticks.html" },
  { name: "Walker for Adults", page: "walker-for-adults.html" },
  { name: "Skin Tag Remover", page: "skin-tag-remover.html" },
  { name: "Support-Braces & Splints", page: "support-braces.html" },
  { name: "Bath/Shower Chair", page: "bath-shower-chair.html" },
  { name: "CPAP BiPAP Mask & Accessories", page: "cpap-bipap-mask.html" },
  { name: "Physiotherapy & Rehabilitation", page: "physiotherapy.html" },
  { name: "Respiratory Mask", page: "respiratory-mask.html" },
  { name: "Steam Vaporizer", page: "steam-vaporizer.html" },
  { name: "Ankle & Foot Supports", page: "ankle-foot-supports.html" },
  { name: "Arm Support", page: "arm-support.html" },
  { name: "Back Support", page: "back-support.html" },
  { name: "Body Belts", page: "body-belts.html" },
  { name: "Hip Support", page: "hip-support.html" },
  { name: "Shoulder Support", page: "shoulder-support.html" },
  { name: "Waist & Abdomen Supports", page: "waist-abdomen-supports.html" },
  { name: "Splints", page: "splints.html" },
  { name: "Homecare Equipments", page: "homecare-equipments.html" },
  { name: "Nebulizer Kit", page: "nebulizer-kit.html" },
  { name: "Spirometer- Incentive Spirometer", page: "spirometer.html" },
  { name: "Oxygen Analyzer", page: "oxygen-analyzer.html" },
  { name: "Peak Flow Meter", page: "peak-flow-meter.html" },
  { name: "Polysomnography Machine", page: "polysomnography-machine.html" },
  { name: "Oxygen Cylinder", page: "oxygen-cylinder.html" },
  { name: "Body Plethysmograph", page: "body-plethysmograph.html" },
  { name: "Oscillometry Device", page: "oscillometry-device.html" },
  { name: "Breath Analyser Machine", page: "breath-analyser-machine.html" }
];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("searchSuggestions");

/* SHOW SUGGESTIONS */

searchInput.addEventListener("keyup", function(){
  const value = this.value.toLowerCase().trim();
  suggestions.innerHTML = "";

  if(value === ""){
    suggestions.classList.remove("show");
    return;
  }

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  suggestions.classList.add("show");

  if(filtered.length > 0){
    filtered.forEach(product => {
      const div = document.createElement("div");
      div.className = "search-item";

      div.innerHTML = `
        <i class="fa-solid fa-magnifying-glass"></i>
        ${product.name}
      `;

      div.onclick = function(){
        window.location.href = product.page;
      };

      suggestions.appendChild(div);
    });
  }else{
    suggestions.innerHTML = `
      <div class="search-item not-found">
        <i class="fa-solid fa-circle-exclamation"></i>
        Product Not Found
      </div>
    `;
  }
});

/* SEARCH ACTION */

function searchProducts(event){
  event.preventDefault();

  const value = document.getElementById("searchInput").value.trim();

  if(value !== ""){
    window.location.href =
      `search-results.html?q=${encodeURIComponent(value)}`;
  }
}

/* CLOSE SUGGESTIONS */

document.addEventListener("click", function(e){
  if(!e.target.closest(".search-box")){
    suggestions.classList.remove("show");
  }
});



const menuBtn = document.querySelector(".menu-btn");
const mobileSidebar = document.getElementById("mobileSidebar");

menuBtn.addEventListener("click", () => {

  mobileSidebar.classList.toggle("open");

});










function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product){
  let cart = getCart();

  const existingProduct = cart.find(item => item.id === product.id);

  if(existingProduct){
    existingProduct.qty += 1;
  }else{
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
  updateCartCount();

  alert("Product added to cart");
}

function updateCartCount(){
  const cartCount = document.getElementById("cartCount");
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => total + item.qty, 0);

  if(cartCount){
    cartCount.textContent = totalItems;
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);




function getWishlist(){
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function updateWishlistCount(){
  const wishlistCount = document.getElementById("wishlistCount");
  const wishlist = getWishlist();

  if(wishlistCount){
    wishlistCount.textContent = wishlist.length;
  }
}

document.addEventListener("DOMContentLoaded", updateWishlistCount);