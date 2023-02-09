const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__link');


const handleNav = () => {
    nav.classList.toggle('nav--active');


    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })  // chcemy, by po kliknięciu w link menu się nam chowało

    })
}

navBtn.addEventListener('click', handleNav)