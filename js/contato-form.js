// ARQUIVO: src/js/contato-form.js

// Adiciona um ouvinte de evento para o formulário, usando o novo ID em português.
document.getElementById('formularioWhatsapp').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // 1. Coleta os dados do formulário usando os novos IDs em português:
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const detalhes = document.getElementById('detalhes').value;

    // 2. Monta a mensagem pré-preenchida
    // Usamos encodeURIComponent para garantir que caracteres especiais (espaços, quebras de linha) sejam tratados corretamente na URL.
    
    let message = `Olá, gostaria de solicitar um orçamento para desenvolvimento de um site.`;
    message += `\n\n*Detalhes do Cliente:*`;
    message += `\nNome: ${nome}`;
    message += `\nServiço Desejado: ${servico}`;
    message += `\n\n*Descrição do Projeto:*`;
    
    // Inclui os detalhes e adiciona uma verificação para não enviar "undefined" se o campo estiver vazio.
    message += `\n${detalhes || 'Nenhuma descrição detalhada fornecida.'}`; 
    message += `\n\nPor favor, entre em contato para discutirmos mais detalhes.`;

    // 3. Codifica a mensagem
    const encodedMessage = encodeURIComponent(message);

    // 4. Cria o link do WhatsApp (wa.me)
    const whatsappNumber = '5598984808565'; // EX: 5511987654321 (DDI + DDD + Número)
    
    // Formato: https://wa.me/numerodowhatsapp/?text=mensagemcodificada
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 5. Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank');
});