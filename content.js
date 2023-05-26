// Função para gerar um hash a partir de uma string
const stringToHash = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
};

// Função para converter um número em uma cor hexadecimal
const intToHex = (int) => {
    let hex = ((int >> 24) & 0xFF).toString(16) +
        ((int >> 16) & 0xFF).toString(16) +
        ((int >> 8) & 0xFF).toString(16) +
        (int & 0xFF).toString(16);
    return '#' + hex.slice(0, 6);
};

// Função para criar a barra no topo do site
const createBar = () => {
    // Pegar o domínio do PJe
    const domain = window.location.hostname;
    // Gerar um hash a partir do domínio
    const hash = stringToHash(domain);
    // Converter o hash em uma cor hexadecimal
    const color = intToHex(hash);
    // Criar um elemento div para a barra
    const bar = document.createElement('div');
    // Atribuir um id para a barra
    bar.id = 'pje-bar';
    // Atribuir um estilo para a barra
    bar.style.backgroundColor = color;
    bar.style.height = '20px';
    bar.style.width = '100%';
    bar.style.position = 'fixed';
    bar.style.top = '0';
    bar.style.left = '0';
    bar.style.zIndex = '9999';
    // Criar um elemento span para o texto do domínio
    const text = document.createElement('span');
    // Atribuir um estilo para o texto
    text.style.color = 'white';
    text.style.fontFamily = 'Arial, sans-serif';
    text.style.fontSize = '14px';
    text.style.fontWeight = 'bold';
    text.style.textAlign = 'center';
    text.style.display = 'block';
    text.style.lineHeight = '20px';
    // Colocar o domínio como conteúdo do texto
    text.textContent = domain;
    // Anexar o texto à barra
    bar.appendChild(text);

    // Pegar o corpo do documento
    const body = document.body;
    // Atribuir um estilo para o corpo do documento
    body.style.marginTop = '20px'; // Mesmo valor da altura da barra


    // Anexar a barra ao corpo do documento
    document.body.appendChild(bar);
};

createBar();
