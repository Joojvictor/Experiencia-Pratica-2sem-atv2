// ===== equipe.js =====
// Módulo responsável por gerar os cards da equipe dinamicamente.

const equipe = [
  { nome: 'Homem', foto: 'img/homem-corporativo.jpg' },
  { nome: 'Homem II', foto: 'img/homem-corporativo-2.jpg' },
  { nome: 'Mulher', foto: 'img/mulher-corporativa.jpg' },
];

export function gerarEquipe() {
  const container = document.getElementById('lista-equipe');
  if (!container) return;

  const htmlDosCards = equipe.map(function (pessoa, indice) {
    return `
      <div class="membro" data-aos="fade-up" data-aos-delay="${indice * 150}">
        <img class="membro-foto" src="${pessoa.foto}" alt="${pessoa.nome}">
        <p class="membro-info">${pessoa.nome}</p>
      </div>
    `;
  }).join('');

  container.innerHTML = htmlDosCards;
}

gerarEquipe();
