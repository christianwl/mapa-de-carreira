class SkillsColumn extends HTMLElement {
    connectedCallback() {
        const rawData = this.getAttribute('data');
        if (!rawData) return;

        try {
            const data = JSON.parse(rawData);
            const isProgress = data.tipo === "progress";

            const content = isProgress 
                ? this.renderProgressList(data.itens) 
                : this.renderBadgeList(data.itens);

            this.innerHTML = `
                <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">${data.categoria}</h4>
                    ${content}
                </div>
            `;
        } catch (e) {
            console.error("Erro no componente de skills:", e);
        }
    }

    renderProgressList(itens) {
        return `
            <ul class="list-unstyled mb-4">
                ${itens.map(item => `
                    <li class="mb-2">
                        <div class="resume-skill-name">${item.nome}</div>
                        <div class="progress resume-progress">
                            <div class="progress-bar theme-progress-bar-dark" 
                                 role="progressbar" 
                                 style="width: ${item.nivel}%" 
                                 aria-valuenow="${item.nivel}" 
                                 aria-valuemin="0" 
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </li>
                `).join('')}
            </ul>`;
    }

    renderBadgeList(itens) {
        return `
            <ul class="list-inline">
                ${itens.map(item => `
                    <li class="list-inline-item">
                        <span class="badge badge-light">${item}</span>
                    </li>
                `).join('')}
            </ul>`;
    }
}

customElements.define('skills-column', SkillsColumn);