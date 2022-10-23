document.addEventListener('DOMContentLoaded', function() {
  const navToggler = document.querySelector('.header__nav--hamburger');
  const navMenu = document.querySelector('.header__nav--navbar ul');
  const navLinks = document.querySelectorAll('.header__nav--navbar a');

  function allEventListeners() {
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
  }
  
  allEventListeners();

  function togglerClick() {
    navToggler.classList.toggle('hamburger-open');
    navMenu.classList.toggle('open');
  }
  
  
  function navLinkClick() {
    if(navMenu.classList.contains('open')) {
      navToggler.click();
    }
  }
});

