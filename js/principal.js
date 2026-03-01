// ARQUIVO: src/js/principal.js

// Ouve o evento de que o conteúdo do DOM (HTML) está completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o elemento usando a nova classe em português:
    const trechoCodigo = document.querySelector('.animacao-trecho-codigo');
    
    // 2. Lógica de inicialização (ex: animações, efeitos de scroll, etc.)
    if (trechoCodigo) {
        // Exemplo: Simplesmente para ilustrar que o script está funcionando.
        console.log("Portfólio carregado! Elemento de animação encontrado.");
A
        // EXEMPLO DE INTERAÇÃO: Adicionar uma classe para iniciar uma animação CSS
        // trechoCodigo.classList.add('iniciar-animacao'); 
    }
    
    // EX: Adicionar função para Smooth Scroll (Rolagem Suave)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Verifica se o link não é o botão de contato do formulário
            if (this.getAttribute('href') === '#contato' && this.classList.contains('btn-whatsapp')) {
                return; 
            }
            
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});