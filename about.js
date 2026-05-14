/* HERO REVEAL */

const heroReveals = document.querySelectorAll(
  ".reveal-left, .reveal-right"
);

window.addEventListener("load", () => {

  heroReveals.forEach((item, index) => {

    setTimeout(() => {
      item.classList.add("reveal-active");
    }, index * 250);

  });

});







document.addEventListener("DOMContentLoaded", function(){

  const storyItems = document.querySelectorAll(".story-left, .story-right");

  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        storyObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  storyItems.forEach(item => storyObserver.observe(item));

});  


document.addEventListener("DOMContentLoaded", function(){

  const missionCards = document.querySelectorAll(".mv-left, .mv-right");

  const missionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        missionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  missionCards.forEach(card => missionObserver.observe(card));

});







document.addEventListener("DOMContentLoaded", function(){

  const setCards = document.querySelectorAll(".sets-card");

  const setObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){

        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120);

        setObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  setCards.forEach(card => setObserver.observe(card));

});



document.addEventListener("DOMContentLoaded", function(){

  const valueItems = document.querySelectorAll(".core-value-item");

  const valueObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 140);

        valueObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  valueItems.forEach(item => valueObserver.observe(item));

});



document.addEventListener("DOMContentLoaded", function(){

  const solutionItems = document.querySelectorAll(".fade-left, .fade-right");

  const solutionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        solutionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  solutionItems.forEach(item => solutionObserver.observe(item));

});








document.addEventListener("DOMContentLoaded", function(){

  const teamCards = document.querySelectorAll(".team-card");

  const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){

        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 130);

        teamObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  teamCards.forEach(card => teamObserver.observe(card));

});







document.addEventListener("DOMContentLoaded", function(){

  const aboutCta = document.querySelector(".about-cta-box");

  const aboutCtaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        aboutCtaObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  aboutCtaObserver.observe(aboutCta);

});