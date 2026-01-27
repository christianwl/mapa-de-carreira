async function carregarSecao(url, containerId, componenteTag) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        
        const dados = await response.json();
        container.innerHTML = '';

        dados.forEach(obj => {
            const el = document.createElement(componenteTag);
            el.setAttribute('data', JSON.stringify(obj));
            container.appendChild(el);
        });
    } catch (error) {
        console.error(`Falha ao carregar ${url}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarSecao('./assets/json/experiencias.json', 'container-experiencia', 'resume-item');
    carregarSecao('./assets/json/skills.json', 'skills-container', 'skills-column');
});