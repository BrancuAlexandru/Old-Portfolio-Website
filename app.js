const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .navbar .nav-list ul');
const menuItem = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  })
});