let menuItems = document.querySelectorAll('.item');

menuItems.forEach(btn => {
    btn.addEventListener('click', () => {
        menuItems.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active');
    })
})


let chevron = document.getElementById('arrow-down');

let dropDown = document.getElementById('dd-menu');

chevron.addEventListener('click', () => {
    dropDown.classList.toggle("show")
});