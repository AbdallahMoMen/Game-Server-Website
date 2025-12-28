const navIcon = document.querySelector("header .icon");
const toggNav = document.querySelector("header .toggler-nav");

const loginBtns = document.querySelectorAll("header .login-btn");
const accordionHeaders = document.querySelectorAll("#faq .accordian-head");
const accordionAnswers = document.querySelectorAll("#faq .container .answer");

// Login Button Logic
loginBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Prevent event bubbling if clicking inside the menu
    if (e.target.closest(".toggler-login")) return;

    const toggler = btn.querySelector(".toggler-login");
    if (toggler) {
      toggler.classList.toggle("open");
    }
  });
});

// Mobile Navigation Logic
navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("clicked");
  toggNav.classList.toggle("open");
});

// Swiper Initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 15,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Accordion Logic
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    if (header.classList.contains("open")) {
      header.classList.remove("open");
      header.nextElementSibling.removeAttribute("style");
    } else {
      // Close all other items
      accordionHeaders.forEach((h) => {
        h.classList.remove("open");
      });
      accordionAnswers.forEach((ans) => {
        ans.removeAttribute("style");
      });

      // Open clicked item
      header.classList.add("open");
      header.nextElementSibling.style.height =
        header.nextElementSibling.scrollHeight + "px";
    }
  });
});
