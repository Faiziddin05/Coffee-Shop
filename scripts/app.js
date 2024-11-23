const navItems = document.querySelectorAll('.list_sclollbar li');
navItems[4].classList.add('active');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });