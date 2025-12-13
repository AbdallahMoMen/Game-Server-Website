const navIcon = document.querySelector("header .icon");
const toggNav = document.querySelector("header .toggler-nav");

const loginBtn = document.querySelectorAll("header .login-btn");
const togglerLogin = document.querySelectorAll("header .toggler-login");

console.log(togglerLogin);

loginBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    togglerLogin.forEach((tar) => {
      tar.classList.toggle("open");
    });
  });
});

navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("clicked");
  toggNav.classList.toggle("open");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
