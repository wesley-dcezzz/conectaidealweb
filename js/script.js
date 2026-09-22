// Seleciona o botão hamburguer e a caixa de links do menu
const btnMenu = document.getElementById('btn-menu');
const linksNav = document.querySelector('.links-nav');

if (btnMenu && linksNav) {
    // Quando clicar no botão, ativa ou desativa a classe 'ativo'
    btnMenu.addEventListener('click', () => {
        linksNav.classList.toggle('ativo');
    });

    // Fecha o menu automaticamente quando o usuário clica em qualquer link
    const itensMenu = linksNav.querySelectorAll('a');
    itensMenu.forEach(link => {
        link.addEventListener('click', () => {
            linksNav.classList.remove('ativo');
        });
    });
}