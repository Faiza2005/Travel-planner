document.addEventListener("DOMContentLoaded", () => {
  let searchBtn = document.querySelector("#search-btn");
  let searchBar = document.querySelector(".search-bar-container");
  let formBtn = document.querySelector("#login-btn");
  let loginForm = document.querySelector(".login-form-container");
  let formClose = document.querySelector("#form-close");
  let menu = document.querySelector("#menu-bar");
  let navbar = document.querySelector(".navbar");
  let videoBtn = document.querySelectorAll(".vid-btn");

  // Close elements when scrolling
  window.onscroll = () => {
      searchBtn.classList.remove("fa-times");
      searchBar.classList.remove("active");
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
      loginForm.classList.remove("active");
  };

  // Toggle navbar menu
  menu.addEventListener("click", () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
  });

  // Toggle search bar
  searchBtn.addEventListener("click", () => {
      searchBtn.classList.toggle("fa-times");
      searchBar.classList.toggle("active");
  });

  // Show login form
  formBtn.addEventListener("click", () => {
      loginForm.classList.add("active");
      document.body.style.overflow = "hidden"; // Disable scrolling when login is active
  });

  // Close login form
  formClose.addEventListener("click", () => {
      loginForm.classList.remove("active");
      document.body.style.overflow = "auto"; // Restore scrolling
  });

  // Detect clicks outside login form for proper closing
  window.addEventListener("click", (event) => {
      if (!loginForm.contains(event.target) && event.target !== formBtn) {
          loginForm.classList.remove("active");
          document.body.style.overflow = "auto";
      }
  });

  // Video slider functionality
  videoBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
          document.querySelector(".controls .active").classList.remove("active");
          btn.classList.add("active");
          let src = btn.getAttribute("data-src");
          document.querySelector("#video-slider").src = src;
      });
  });
});
