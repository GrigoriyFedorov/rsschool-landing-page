const mobileOverlay = document.getElementById("mobileOverlay");
const navLinks = document.querySelectorAll(
  ".mobile-overlay__menu-link, .mobile-overlay__logo-link",
);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileOverlay.close();
  });
});

// -----------------SLIDER--------------------------

const sliderTrack = document.querySelector(".slider__track");
const sliderSlides = document.querySelectorAll(".slider__slide");
const sliderBtnPrev = document.querySelector(".slider__button--prev");
const sliderBtnNext = document.querySelector(".slider__button--next");
const sliderIndicators = document.querySelectorAll(".slider__indicator");
let slideIndex = 0;

const getSlideWidth = () => sliderSlides[0].offsetWidth;

const updateIndicator = (activeIndex) => {
  sliderIndicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      "slider__indicator--active",
      index === activeIndex,
    );
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeIndex = Array.from(sliderSlides).indexOf(entry.target);
        slideIndex = activeIndex;
        updateIndicator(activeIndex);
      }
    });
  },
  {
    root: sliderTrack,
    threshold: 0.6,
  },
);

sliderSlides.forEach((slide) => {
  observer.observe(slide);
});

sliderBtnNext.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= sliderSlides.length) {
    slideIndex = 0;
  }
  sliderTrack.scrollTo(getSlideWidth() * slideIndex, 0);
});

sliderBtnPrev.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderSlides.length - 1;
  }
  sliderTrack.scrollTo(getSlideWidth() * slideIndex, 0);
});
