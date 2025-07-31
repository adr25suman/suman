// // Toggle mobile navigation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon?.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Highlight active nav links on scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  let currentScroll = window.scrollY;

  sections.forEach((section) => {
    let top = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (currentScroll >= top && currentScroll < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar a[href*=" + id + "]")
          ?.classList.add("active");
      });
    }
  });
};

// Scroll to top button (optional)
const topButton = document.querySelector(".footer-iconTop a");
topButton?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
