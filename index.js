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
