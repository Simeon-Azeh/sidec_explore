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
// Selectors
function openModal() {
  const portfolioModal = document.querySelector(".portfolio-model");
  portfolioModal.classList.add("active");
}

function closeModal() {
  const portfolioModal = document.querySelector(".portfolio-model");
  portfolioModal.classList.remove("active");
  //   console.log("Closing modal"); // Add this line for debugging
  //   var closeBtn = document.querySelector(".portfolio-close-btn");
  //   var portfolioModal = closeBtn.closest(".portfolio-model");
  //   portfolioModal.classList.remove("active");
  //   console.log(portfolioModal.classList.value);
}

// Example: Add onclick attribute to each admin_card to open the modal
var adminCards = document.getElementsByClassName("admin_card");
for (var i = 0; i < adminCards.length; i++) {
  adminCards[i].addEventListener("click", openModal);
}

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
  ".featured_text h1, .featured_text p, .download-button2",
  { ...revealOptions, origin: "right" }
);

ScrollReveal().reveal(".swiper ", { ...revealOptions, origin: "right" });

ScrollReveal().reveal(".accordion, .blog_main_heading ", {
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
}
