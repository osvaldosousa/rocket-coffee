let scrollPage = true
const menuMobile = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuMobile.addEventListener('click', () => {
  document.body.style.overflow = scrollPage ? "hidden" : "initial"
  menuMobile.classList.toggle('-open');
  navLinks.classList.toggle('-open');
  scrollPage = !scrollPage
})