const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      const target = Number(counter.getAttribute("data-target"));
      let count = 0;
      const speed = target / 80;

      const updateCounter = () => {
        count += speed;

        if(count < target){
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCounter);
        }else{
          counter.textContent = target.toLocaleString("en-IN");
        }
      };

      updateCounter();
      observer.unobserve(counter);
    }
  });
},{ threshold:0.4 });

counters.forEach(counter => counterObserver.observe(counter));















const defaultReviews = [
  {
    name:"Ramesh Kumar",
    service:"Oxygen Concentrator",
    rating:5,
    message:"Very good support and fast delivery. The team helped us choose the right oxygen concentrator for home use."
  },
  {
    name:"Priya Sharma",
    service:"CPAP Machine",
    rating:5,
    message:"Excellent guidance and genuine product. The CPAP machine setup support was very helpful."
  },
  {
    name:"Rahul Reddy",
    service:"Wheelchair",
    rating:4,
    message:"Good quality wheelchair and smooth delivery. Customer support responded quickly."
  },
  {
    name:"Gayathri Devi",
    service:"Homecare Equipment",
    rating:5,
    message:"Very professional service. They explained everything clearly before purchase."
  }
];

const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");

function getReviews(){
  const savedReviews = JSON.parse(localStorage.getItem("customerReviews")) || [];
  return [...savedReviews, ...defaultReviews];
}

function createStars(rating){
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function renderReviews(){
  if(!reviewList) return;

  const reviews = getReviews();

  reviewList.innerHTML = reviews.map(review => `
    <div class="review-card">
      <div class="review-top">
        <div class="review-avatar">
          ${review.name.charAt(0).toUpperCase()}
        </div>

        <div class="review-info">
          <h4>${review.name}</h4>
          <span>${review.service}</span>
        </div>
      </div>

      <div class="review-stars">${createStars(Number(review.rating))}</div>

      <p>${review.message}</p>
    </div>
  `).join("");
}

if(reviewForm){
  reviewForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const service = document.getElementById("reviewService").value.trim();
    const rating = document.getElementById("reviewRating").value;
    const message = document.getElementById("reviewMessage").value.trim();

    if(name === "" || service === "" || message === ""){
      alert("Please fill all review fields.");
      return;
    }

    const newReview = {
      name,
      service,
      rating:Number(rating),
      message
    };

    const savedReviews = JSON.parse(localStorage.getItem("customerReviews")) || [];
    savedReviews.unshift(newReview);

    localStorage.setItem("customerReviews", JSON.stringify(savedReviews));

    reviewForm.reset();
    renderReviews();

    alert("Thank you! Your review has been added.");
  });
}

renderReviews();