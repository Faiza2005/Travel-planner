// Element Selectors
const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const formBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const menuBtn = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const videoBtns = document.querySelectorAll('.vid-btn');
const videoSlider = document.querySelector('#video-slider');

// Hide elements on scroll
window.onscroll = () => { 
  searchBtn?.classList.remove('fa-times');
  searchBar?.classList.remove('active');
  menuBtn?.classList.remove('fa-times');
  navbar?.classList.remove('active');
  loginForm?.classList.remove('active');
};

// Toggle mobile menu
menuBtn?.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');
  navbar?.classList.toggle('active');
});

// Toggle search bar
searchBtn?.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar?.classList.toggle('active');
});

// Show login form
formBtn?.addEventListener('click', () => {
  loginForm?.classList.add('active');
});

// Close login form
formClose?.addEventListener('click', () => {
  loginForm?.classList.remove('active');
});

// Switch home background video
videoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active')?.classList.remove('active');
    btn.classList.add('active');
    const newSrc = btn.getAttribute('data-src');
    if (videoSlider && newSrc) {
      videoSlider.src = newSrc;
    } 
  });
});

//reviews 
var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Initialize Swiper for brand logos
new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    991: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
  },
});


 const params = new URLSearchParams(window.location.search);
    const query = params.get('query') || "Popular";

    const hotels = [
      {
        name: `${query} Paradise Resort`,
        description: "Luxury stay with beach view and pool access.",
        img: "https://source.unsplash.com/300x200/?hotel,resort"
      },
      {
        name: `${query} City Inn`,
        description: "Affordable comfort in the heart of the city.",
        img: "https://source.unsplash.com/300x200/?hotel,room"
      },
      {
        name: `${query} Eco Lodge`,
        description: "Nature-friendly stay surrounded by greenery.",
        img: "https://source.unsplash.com/300x200/?hotel,nature"
      }
    ];

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = hotels.map(hotel => `
      <div class="hotel-card">
        <img src="${hotel.img}" alt="${hotel.name}">
        <div class="details">
          <h3>${hotel.name}</h3>
          <p>${hotel.description}</p>
        </div>
      </div>
    `).join('');