document.addEventListener("DOMContentLoaded", function () {
  // Toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // Scroll selections active links
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

    // Sticky navbar
    let header = document.querySelector(".logo-nav-container");

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) document.body.classList.add("sticky");

        if (ent.isIntersecting === true)
          document.body.classList.remove("sticky");
      },

      {
        // in viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );
    obs.observe(header);

    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    if (menuIcon) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  };

  // Scroll Reveal
  ScrollReveal({
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

  ScrollReveal().reveal(".home-content h1, .about-image", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

  // Typed JS
  const typed = new Typed(".multiple-text", {
    strings: [
      "a Machine Learning Enthusiast",
      "a Data Science Enthusiast,",
      "a Web Developer (Front-End)",
      "a Python Developer",
      "a UX Designer",
      "a Web Designer",
      "an ICT Project Management Enthusiast, and",
      "an M.Sc. Information Systems student at Gazi University",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  const aboutTyped = new Typed(".about-text", {
    strings: [
      "a Machine Learning Enthusiast",
      "a Data Science Enthusiast,",
      "a Web Developer (Front-End)",
      "a Python Developer",
      "a UX Designer",
      "a Web Designer",
      "an ICT Project Management Enthusiast, and",
      "an M.Sc. Information Systems student at Gazi University",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // Set current year
  const yearEL = document.querySelector(".year");
  if (yearEL) {
    const currentYear = new Date().getFullYear();
    yearEL.textContent = currentYear;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }

  // Scroll selections active links
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

    // Sticky navbar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    if (menuIcon) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  };

  // Scroll Reveal
  ScrollReveal({
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

  ScrollReveal().reveal(".home-content h1, .about-image", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

  // Typed JS
  const typed = new Typed(".multiple-text", {
    strings: [
      "a Machine Learning Enthusiast",
      "a Data Science Enthusiast,",
      "a Web Developer (Front-End)",
      "a Python Developer",
      "a UX Designer",
      "a Web Designer",
      "an ICT Project Management Enthusiast, and",
      "an M.Sc. Information Systems student at Gazi University",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  const aboutTyped = new Typed(".about-text", {
    strings: [
      "a Machine Learning Enthusiast",
      "a Data Science Enthusiast,",
      "a Web Developer (Front-End)",
      "a Python Developer",
      "a UX Designer",
      "a Web Designer",
      "an ICT Project Management Enthusiast, and",
      "an M.Sc. Information Systems student at Gazi University",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // Set current year
  const yearEL = document.querySelector(".year");
  if (yearEL) {
    const currentYear = new Date().getFullYear();
    yearEL.textContent = currentYear;
  }
});
