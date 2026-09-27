// ===== armazenamento.js =====
// Módulo responsável por toda a persistência via localStorage.
// Nenhuma outra parte do sistema deve acessar localStorage diretamente
// fora deste arquivo — isso mantém a lógica de Web Storage isolada.

const CHAVE_CADASTROS = 'upttpu_cadastros';

export function salvarCadastro(dados) {
  const cadastrosExistentes = obterCadastros();
  cadastrosExistentes.push(dados);
  localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastrosExistentes));
}

export function obterCadastros() {
  return JSON.parse(localStorage.getItem(CHAVE_CADASTROS)) || [];
}

export function restaurarContadorCadastros() {
  const elementoContador = document.getElementById('contador-cadastros');
  if (!elementoContador) return;

  const total = obterCadastros().length;

  if (total === 0) {
    elementoContador.textContent = '';
    return;
  }

  const sujeito = total > 1 ? `${total} pessoas` : '1 pessoa';
  const verbo = total > 1 ? 'se cadastraram' : 'se cadastrou';

  elementoContador.textContent = `Junte-se a ${sujeito} que já ${verbo}!`;
}

restaurarContadorCadastros();
