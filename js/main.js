// اسلایدر

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let intrevalSlider = setInterval("plusSlides(1)", 5000);

function stopSlide() {
  clearInterval(intrevalSlider);
}

function resumeSlide() {
  intrevalSlider = setInterval("plusSlides(1)", 5000);
}

// s2 swiper

const swiperEl = document.querySelector(".s2Swiper");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },

    1400: {
      slidesPerView: 4.5,
      spaceBetween: 45,
    },

    100: {
      slidesPerView: 5.5,
      spaceBetween: 55,
    },
  },
});
swiperEl.initialize();
