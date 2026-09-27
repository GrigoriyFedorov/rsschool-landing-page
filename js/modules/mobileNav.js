export function initMobileNav() {
  const mobileOverlay = document.getElementById("mobileOverlay");
  const navLinks = document.querySelectorAll(
    ".mobile-overlay__menu-link, .mobile-overlay__logo-link",
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileOverlay.close();
    });
  });
}
