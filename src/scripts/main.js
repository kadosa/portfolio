const ready = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
};

ready(() => {
  const yearTarget = document.querySelector("[data-year]");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll(".nav__link");
  const { pathname } = window.location;
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === pathname) {
      link.classList.add("nav__link--active");
    }
  });
});
