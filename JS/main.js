/*========================================= Toggle icon navbar =================================*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*========================================= Scroll selections active links =================================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========================================= Sticky navbar =================================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*======================== Remove toggle icon and navbar when click navbar link (scroll)=========================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========================================= Scroll Reveal =================================*/
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home-content h1, .about-image", { origin: "left  " });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right  " });

/*========================================= typed JS =================================*/

const typed = new Typed(".multiple-text", {
  strings: [
    "a Machine Learning Enthusiast",
    "Data Science Enthusiast,",
    "a Web Developer",
    "a UX Designer",
    "a Web Designer",
    "an ICT Project Management Enthusiast, and",
    "an M.Sc. Information Systems student at Gazi University",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDely: 1000,
  loop: true,
});

const aboutTyped = new Typed(".about-text", {
  strings: [
    "a Machine Learning Enthusiast",
    "Data Science Enthusiast,",
    "a Web Developer",
    "a UX Designer",
    "a Web Designer",
    "an ICT Project Management Enthusiast, and",
    "an M.Sc. Information Systems student at Gazi University",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDely: 1000,
  loop: true,
});

// SET CURRENT YEAR
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEL.textContent = currentYear;

// ============================= LOGIN & REGISTRATION FORM JS ===========================================
// const wrapper = document.querySelector(".wrapper");
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");
// const btnPopup = document.querySelector(".login-button");
// const iconClose = document.querySelector(".icon-close");

// registerLink.addEventListener("click", () => {
//   wrapper.classList.add("active");
// });

// loginLink.addEventListener("click", () => {
//   wrapper.classList.remove("active");
// });

// btnPopup.addEventListener("click", () => {
//   wrapper.classList.add("active-popup");
// });

// iconClose.addEventListener("click", () => {
//   wrapper.classList.remove("active-popup");
// });
