const counters = document.querySelectorAll("[data-count]");

const startCounter = (counter) => {
  const target = +counter.getAttribute("data-count");
  let count = 0;
  const speed = target / 80;

  const update = () => {
    count += speed;

    if(count < target){
      counter.innerText = Math.ceil(count).toLocaleString();
      requestAnimationFrame(update);
    }else{
      counter.innerText = target.toLocaleString();
    }
  };

  update();
};

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});


const trustItems = document.querySelectorAll(".trust-item");

const trustObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 120);
    }
  });
}, {
  threshold: 0.2
});

trustItems.forEach(item => trustObserver.observe(item));












const categories = [
  "Oxygen Concentrator","BiPAP Machine & BiPAP Ventilator","CPAP Machine",
  "Nebulizer Machine","Hearing Aid","Wheelchair","Breast Feeding Pump",
  "Sleep Test Machine","Insulin Pump","Stair Climbing Wheelchair",
  "Commode Chair","Crutches","Feno Test Machine","Air Purifier",
  "Cough Assist Machine","BiPAP & CPAP Machine","Health & Personal Care",
  "Fitness Equipment","Step Counter/Pedometer","Massager","Body Care",
  "Mobile Aid","Oxygen Concentrator Accessories","Walking Sticks",
  "Walker for Adults","Skin Tag Remover","Support-Braces & Splints",
  "Bath/Shower Chair","CPAP BiPAP Mask & Accessories",
  "Physiotherapy & Rehabilitation","Respiratory Mask","Steam Vaporizer",
  "Ankle & Foot Supports","Arm Support","Back Support","Body Belts",
  "Hip Support","Shoulder Support","Waist & Abdomen Supports","Splints",
  "Homecare Equipments","Nebulizer Kit","Spirometer- Incentive Spirometer",
  "Oxygen Analyzer","Peak Flow Meter","Polysomnography Machine",
  "Oxygen Cylinder","Body Plethysmograph","Oscillometry Device",
  "Breath Analyser Machine"
];

const categoryChips = document.getElementById("categoryChips");

if(categoryChips){
  categoryChips.innerHTML = "";

  categories.forEach(category => {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "category-chip";
    link.textContent = category;
    categoryChips.appendChild(link);
  });
}

const revealCats = document.querySelectorAll(".reveal-cat");

const catObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      catObserver.unobserve(entry.target);
    }
  });
}, {
  threshold:0.15
});

revealCats.forEach(item => catObserver.observe(item));


const productCards = document.querySelectorAll(".product-card");

const productObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show-product");
      productObserver.unobserve(entry.target);
    }
  });
}, {
  threshold:0.15
});

productCards.forEach(card => productObserver.observe(card));









document.addEventListener("DOMContentLoaded", function () {

  const whyRevealElements = document.querySelectorAll(".reveal-left, .reveal-right");

  const whyRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        whyRevealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  whyRevealElements.forEach((el) => {
    whyRevealObserver.observe(el);
  });


  const whyCounters = document.querySelectorAll(".counter");

  const whyCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.getAttribute("data-target"));

        let count = 0;
        const speed = 100;
        const increment = Math.ceil(target / speed);

        function updateCounter() {
          count += increment;

          if (count >= target) {
            counter.textContent = target.toLocaleString();
          } else {
            counter.textContent = count.toLocaleString();
            requestAnimationFrame(updateCounter);
          }
        }

        updateCounter();
        whyCounterObserver.unobserve(counter);
      }

    });
  }, {
    threshold: 0.5
  });

  whyCounters.forEach((counter) => {
    whyCounterObserver.observe(counter);
  });

});










document.addEventListener("DOMContentLoaded", function(){

  const aboutItems = document.querySelectorAll(".about-left-anim, .about-right-anim");

  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        aboutObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  aboutItems.forEach(item => aboutObserver.observe(item));

});





document.addEventListener("DOMContentLoaded", function(){

  const howCards = document.querySelectorAll(".how-card");

  const howObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 140);

        howObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  howCards.forEach(card => howObserver.observe(card));

});











document.addEventListener("DOMContentLoaded", function(){

  const brandCards = document.querySelectorAll(".brand-card");

  const brandObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 80);

        brandObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  brandCards.forEach(card => brandObserver.observe(card));

});

