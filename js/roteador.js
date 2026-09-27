// ===== roteador.js =====
// Módulo responsável pela navegação SPA (History API + fetch + DOM).
// Importa as funções que precisam ser "religadas" após cada injeção de HTML.

import { iniciarFormularioCadastro } from './modal.js';
import { gerarEquipe } from './equipe.js';
import { inicializarValidacaoFormulario } from './validacao.js';
import { restaurarContadorCadastros } from './armazenamento.js';

export async function buscarPagina(caminho, atualizarHistorico = true) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) throw new Error('Página não encontrada: ' + caminho);

    const html = await resposta.text();

    const parser = new DOMParser();
    const novoDocumento = parser.parseFromString(html, 'text/html');
    const novoMain = novoDocumento.querySelector('main');
    const mainAtual = document.querySelector('main');

    if (!novoMain || !mainAtual) {
      window.location.href = caminho;
      return;
    }

    mainAtual.innerHTML = novoMain.innerHTML;
    document.title = novoDocumento.title;

    // religa as funções que dependem de elementos da página recém-injetada
    iniciarFormularioCadastro();
    gerarEquipe();
    inicializarValidacaoFormulario();
    restaurarContadorCadastros();

    // AOS é carregado via <script> clássico (não é módulo), então
    // existe como variável global — daí a checagem de segurança abaixo
    if (typeof AOS !== 'undefined') {
      AOS.refreshHard();
    }

    if (atualizarHistorico) {
      window.history.pushState({}, '', caminho);
    }

    window.scrollTo(0, 0);
  } catch (erro) {
    console.error('Erro ao navegar via SPA:', erro);
    window.location.href = caminho;
  }
}

document.addEventListener('click', function (evento) {
  const link = evento.target.closest('a[href]');
  if (!link) return;

  const destino = new URL(link.href, window.location.origin);

  const ehMesmaOrigem = destino.origin === window.location.origin;
  const ehArquivoHtml = destino.pathname.endsWith('.html');
  const temAlvoExterno = link.target === '_blank';

  if (!ehMesmaOrigem || !ehArquivoHtml || temAlvoExterno) return;

  evento.preventDefault();
  buscarPagina(destino.pathname);
});

window.addEventListener('popstate', function () {
  buscarPagina(window.location.pathname, false);
});
