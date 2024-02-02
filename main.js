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

// Trigger reveal for hero image immediately after the page loads
ScrollReveal().reveal('.hero-img a', { origin: 'bottom' });

// Scroll animation
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

const revealOptions = {
    delay: 500,
    interval: 200,
};

// Replace the following with your specific classes and IDs
ScrollReveal().reveal('.hero-text h1, .hero-text p, .Download-button, .hero-btn2', { ...revealOptions, origin: 'left' });


ScrollReveal().reveal('.featured_text h1, .featured_text p, .download-button2', { ...revealOptions, origin: 'right' });


ScrollReveal().reveal('.swiper ', { ...revealOptions, origin: 'right' });


ScrollReveal().reveal('.accordion ', { ...revealOptions, origin: 'left' });
ScrollReveal().reveal('.featuredimg', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.follow ', { ...revealOptions, origin: 'right' });
ScrollReveal().reveal('.featuredimg', { delay: 400, origin: 'bottom' });


ScrollReveal().reveal('.about-content p, .copyright p', { ...revealOptions, origin: 'left' });

ScrollReveal().reveal('.follow i', { delay: 700, origin: 'left' });

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
