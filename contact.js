document.addEventListener("DOMContentLoaded", function(){

  const contactHeroItems = document.querySelectorAll(
    ".contact-fade-left, .contact-fade-right"
  );

  window.addEventListener("load", () => {
    contactHeroItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 220);
    });
  });

});









document.addEventListener("DOMContentLoaded", function(){

  const enquiryItems = document.querySelectorAll(
    ".contact-slide-left, .contact-slide-right"
  );

  const enquiryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        enquiryObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  enquiryItems.forEach(item => enquiryObserver.observe(item));

});













document.addEventListener("DOMContentLoaded", function(){

  const mapCard = document.querySelector(".contact-map-card");

  if(mapCard){
    const mapObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          mapObserver.unobserve(entry.target);
        }
      });
    },{
      threshold:0.2
    });

    mapObserver.observe(mapCard);
  }

});












document.addEventListener("DOMContentLoaded", function(){

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 100);
  });

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      faqItems.forEach(otherItem => {
        if(otherItem !== item){
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      item.classList.toggle("active");

      if(item.classList.contains("active")){
        answer.style.maxHeight = answer.scrollHeight + "px";
      }else{
        answer.style.maxHeight = null;
      }
    });
  });

});










document.addEventListener("DOMContentLoaded", function(){

  const contactCta = document.querySelector(".contact-cta-content");

  if(contactCta){
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          ctaObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold:0.2
    });

    ctaObserver.observe(contactCta);
  }

});