document.addEventListener("DOMContentLoaded", function(){
  const footerItems = document.querySelectorAll(".sb-footer-about, .sb-footer-col");

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120);

        footerObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.2
  });

  footerItems.forEach(item => footerObserver.observe(item));
});