# Mapa de Carreira — Christian William

Este projeto é um **site de Mapa de Carreira**, desenvolvido em **2024** durante o programa **ProProfissão**, com o objetivo de apresentar minha trajetória, habilidades e metas profissionais na área de tecnologia.

O mapa de carreira reúne informações pessoais e profissionais de forma clara e organizada, servindo como um espaço de apresentação e planejamento de evolução na área de desenvolvimento.

---

## 👤 Sobre

- **Nome:** Christian William  
- **GitHub:** [christianwl](https://github.com/christianwl) 

---

## 🌐 O que o site apresenta

O site contém:

- 📄 Texto de apresentação pessoal  
- 🔗 Links de contato  
- ⬇️ Botão para download do currículo  
- 🧠 Habilidades técnicas (Hard Skills)  
- 🤝 Habilidades comportamentais (Soft Skills)  
- 🎯 Objetivos de carreira:
  - Curto prazo
  - Médio prazo
  - Longo prazo

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **Bootstrap** (para estilização e responsividade)
- **Web Components (Custom Elements):** Criação de tags HTML personalizadas (ex: `<resume-item>`, `<skills-column>`) para encapsulamento de lógica e estilo.
- **Data Injection:** Os dados do currículo não estão fixos no HTML; são consumidos via arquivos **JSON** externos.
- **Arquitetura Escalável:** Uma função de carregamento assíncrona (`fetch`) genérica que permite injetar diferentes fontes de dados em diferentes componentes.
- **Renderização Dinâmica:** Uso de `.map()` e Template Literals para gerar listas de tamanhos variáveis sem necessidade de frameworks como React ou Vue.

## Autor

<div>
  <a href="https://github.com/christianwl">
    <img src="https://contrib.rocks/image?repo=christianwl/mapa-de-carreira" alt="Autor do Portfolio"/>
  </a>
</div>