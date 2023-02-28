let scrollPage = true
const menuMobile = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const intensNav = document.querySelectorAll('.itens-nav');

menuMobile.addEventListener('click', () => {
  document.body.style.overflow = scrollPage ? "hidden" : "initial";
  menuMobile.classList.toggle('-open');
  navLinks.classList.toggle('-open');
  scrollPage = !scrollPage
})

intensNav.forEach(item => {
  item.addEventListener('click', () => {
    menuMobile.classList.toggle('-open');
    navLinks.classList.toggle('-open');
  })
}) 