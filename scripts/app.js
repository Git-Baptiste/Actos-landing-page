// Animation de la Navbar

const btnNav = document.querySelector('.responsive-nav-btn');
const listeNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');


btnNav.addEventListener('click', () => {
      listeNav.classList.toggle('active-nav');
})