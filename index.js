const button = document.querySelectorAll(".theme-switch");
const html = document.documentElement;

button.forEach((button) => {
  button.addEventListener("click", () => {
    if (html.hasAttribute("data-theme")) {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark");
}

const mobileOverlay = document.getElementById('mobileOverlay');
const navLinks = document.querySelectorAll('.mobile-overlay__menu-link, .mobile-overlay__logo-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileOverlay.close();
  } )
})