window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

function menuToggle() {
    const ToggleMenu = document.querySelector('.menuToggle')
    const navigation = document.querySelector('.navigation')

    ToggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}
