class ResumeItem extends HTMLElement {
    connectedCallback() {
        const rawData = this.getAttribute('data');
        if (!rawData) return;

        try {
            const item = JSON.parse(rawData);

            // Renderização condicional para as listas (só aparecem se houver dados)
            const softSkillsHTML = item.softSkills?.length 
                ? `<h4 class="resume-timeline-item-desc-heading font-weight-bold">Soft Skills exigidas:</h4>
                   <ul>${item.softSkills.map(s => `<li><strong>${s.trim()}</strong></li>`).join('')}</ul>` 
                : '';

            const roadmapHTML = item.roadmap?.length 
                ? `<h4 class="resume-timeline-item-desc-heading font-weight-bold">Roadmap de Aprendizado:</h4>
                   <ul class="list-inline">${item.roadmap.map(r => `
                        <li class="list-inline-item"><span class="badge bg-secondary badge-pill">${r.trim()}</span></li>
                   `).join('')}</ul>` 
                : '';

            this.innerHTML = `
                <article class="resume-timeline-item position-relative pb-5">
                    <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                            <h3 class="resume-position-title font-weight-bold mb-1">
                                ${item.titulo || 'Cargo não definido'}
                            </h3>
                        </div>
                    </div>
                    <div class="resume-timeline-item-desc">
                        <p>${item.descricao || ''}</p>
                        ${softSkillsHTML}
                        ${roadmapHTML}
                    </div>
                </article>
            `;
        } catch (e) {
            console.error("Erro ao processar JSON no componente:", e);
        }
    }
}

customElements.define('resume-item', ResumeItem);