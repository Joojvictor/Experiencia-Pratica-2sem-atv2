// ===== script.js =====
// Arquivo de entrada (entry point) do sistema.
// Sua única responsabilidade é importar os módulos — cada import
// dispara as chamadas iniciais e as ligações de evento de seu módulo.
// Nenhuma lógica de negócio deve viver aqui.

import './modal.js';
import './equipe.js';
import './validacao.js';
import './armazenamento.js';
import './roteador.js';

// inicializa o AOS uma única vez, no carregamento da página.
// A partir daqui, é o roteador.js (via AOS.refreshHard()) que garante
// que elementos injetados via SPA também sejam detectados.
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 600,
    once: true,
  });
}