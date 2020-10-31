const dotsMenu = document.querySelector('.dots-menu');
const dropdownList = document.querySelector('.dropdown-list');

dotsMenu.addEventListener('click', () => {
  dropdownList.classList.toggle('dropdown-list--open');
});
