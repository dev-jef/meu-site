let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')


//mennu mobile
btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
    overlay.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
    
})

overlay.addEventListener('click',()=>{
    overlay.classList.remove('abrir-menu')
    
})




//botão topo site
document.addEventListener('DOMContentLoaded', function () {
    // Exibir o botão quando a página for rolada para baixo
    window.addEventListener('scroll', function () {
        const toTopButton = document.getElementById('btn-topo-site');
        if (window.scrollY > 200) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    // Rolagem suave para o topo quando o botão for clicado
    document.getElementById('btn-topo-site').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

