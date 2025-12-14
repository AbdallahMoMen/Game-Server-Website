const navIcon = document.querySelector("header .icon");
const toggNav = document.querySelector("header .toggler-nav");

const loginBtn = document.querySelectorAll("header .login-btn");
const togglerLogin = document.querySelectorAll("header .toggler-login");

const accordHead = document.querySelectorAll("#faq .accordian-head");
const accordBtn = document.querySelectorAll("#faq .accordian-head > span");
const accordAns = document.querySelectorAll("#faq .container .answer");

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

accordHead.forEach((tar) => {
  tar.addEventListener("click", () => {
    if (tar.classList.contains("open")) {
      tar.classList.remove("open");
      tar.nextElementSibling.removeAttribute("Style");
    } else {
      accordHead.forEach((ques) => {
        ques.classList.remove("open");
      });
      accordAns.forEach((ans) => {
        ans.removeAttribute("Style");
      });
      tar.classList.add("open");
      tar.nextElementSibling.style.height =
        tar.nextElementSibling.scrollHeight + "px";
    }
  });
});
