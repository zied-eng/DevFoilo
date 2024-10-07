function changeBackground(element) {
    let card = element.closest('.card');
    card.classList.toggle('clicked');   
    element.classList.add('animate__bounce');  
    setTimeout(() => {
      element.classList.remove('animate__bounce');  
    }, 1000);
  }
  var options = {
    strings: ["Designer Developer Freelancer Photographer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  };

  var typed = new Typed("#typed", options);

  const lightbox = GLightbox({
    selector: '.glightbox' 
  });
   
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,    
    spaceBetween: 30,   
    loop: true, 
    autoplay: {
      delay: 3000,      
      disableOnInteraction: false,  
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });