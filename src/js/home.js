
document.addEventListener('DOMContentLoaded', function(event) {
  const mobileToggleBtn = document.body.querySelector('.toggle-button');

  mobileToggleBtn.addEventListener('click', function(ev) {
    mobileToggleBtn.classList.toggle('active');
  });

  const navLinks = document.body.querySelectorAll('.menu__item');
  navLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      navLinks.forEach((li) => {
        if (li.classList.contains('active')) {
          li.classList.remove('active');
        }
      });
      link.classList.add('active');
    });
  });
  // navLinks.addEventListener('click', function(ev) {
  //   mobileToggleBtn.classList.add('active');
  // });
});

