// hide nav-bar on scroll
const nav = document.querySelector(".navigation");

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        document.querySelector(".navItems").classList.remove("bring-it")

    } else {
      nav.classList.remove("nav--hidden");
      document.querySelector(".navItems").classList.remove("hide-it")

    }
    lastScrollY = window.scrollY
});
// hide nav-bar on scroll

// swipper codes
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end - swipper scripts

// // Profile page script
// let signupBtn = document.getElementById("signupBtn");
// let signinBtn = document.getElementById("signinBtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");

// signinBtn.onclick = function(){
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.remove("disable");            
// }
// signupBtn.onclick = function(){
//     nameField.style.maxHeight = "60px";
//     title.innerHTML = "Sign Up";
//     signupBtn.classList.remove("disable");
//     signinBtn.classList.add("disable");            
// };
// end - Profile page script


// Start- Navigation
const slidedebar = document.getElementById('slidebar');









 

// // mobile_navbar.classList.remove("active")
// if (menuIcon) {
//     menuIcon.addEventListener("click", () => {
//         mobile_navbar.classList.remove("active")
//     })
// }

// const close = document.getElementById('close');

// if (close) {
//     close.addEventListener("click", () => {
//         navbar.classList.remove("active")
//     })
// }

// End- Navigation

