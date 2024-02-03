//Our clients swipper

var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000, // Adjust the time interval (in milliseconds) as needed
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


// Scroll animation
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

const revealOptions = {
  delay: 500,
  interval: 200,
};

// Replace the following with your specific classes and IDs
ScrollReveal().reveal(
  ".hero-text h1, .hero-text p, .Download-button, .hero-btn2",
  { ...revealOptions, origin: "left" }
);

ScrollReveal().reveal(
  ".featured_text h1, .featured_text p, .download-button2, .subscribe-btn",
  { ...revealOptions, origin: "right" }
);

ScrollReveal().reveal(".swiper, .contact-info ", { ...revealOptions, origin: "right" });

ScrollReveal().reveal(".accordion, .blog_main_heading, .subscribe ", {
  ...revealOptions,
  origin: "left",
});
ScrollReveal().reveal(".featuredimg, .blog-btn ", {
  delay: 400,
  origin: "bottom",
});
ScrollReveal().reveal(".follow, .second_blog,   ", {
  ...revealOptions,
  origin: "right",
});
ScrollReveal().reveal("footer .logo", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(
  ".main_links, .optional_links, .first_blog, .professional_list ul",
  { delay: 500, origin: "left" }
);

ScrollReveal().reveal(".about-content p, .copyright p", {
  ...revealOptions,
  origin: "left",
});

ScrollReveal().reveal(".follow i", { delay: 700, origin: "left" });

// Add more as needed, replacing the selectors and adjusting the options

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const mobileIcon = document.getElementById("mobile");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

if (mobileIcon) {
  mobileIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
};
// Modal script
var modals = document.querySelectorAll(".modal");
var Openbtns = document.querySelectorAll(".openBtn");
var backBtns = document.querySelectorAll(".backBtn");

// Check if elements are found
if (modals.length === Openbtns.length && modals.length === backBtns.length) {
  Openbtns.forEach(function (btn, index) {
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modals[index].style.display = "block";
    };

    // When the user clicks on the "Back" button, close the modal
    backBtns[index].onclick = function () {
      modals[index].style.display = "none";
    };
  });

  // When the user clicks anywhere outside of any modal, close it
  window.onclick = function (event) {
    modals.forEach(function (modal) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };
} else {
  console.error("Modal elements not found. Check your HTML and script placement.");
};