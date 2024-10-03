document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, // Show three items
    spaceBetween: 30, // Add space between items
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    breakpoints: {
        768: {
            slidesPerView: 2, // Show two items on medium screens
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1, // Show one item on small screens
            spaceBetween: 10,
        },
    },
});


 