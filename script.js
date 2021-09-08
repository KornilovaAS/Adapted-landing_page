const toggleMenu = document.getElementById('toggle-menu');
const dropdownMenu = document.getElementById('main-menu');
const aside = document.getElementById('hero');

toggleMenu.addEventListener('click', (e) => {
   e.preventDefault()
   dropdownMenu.classList.toggle('is-open')
   if (dropdownMenu.classList.contains('is-open')) {
      aside.style.marginTop = 11 + 'em';
   } else {
      aside.style.marginTop = 0 + 'em';
   }
})
