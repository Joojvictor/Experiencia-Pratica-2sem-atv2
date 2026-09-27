// ===== modal.js =====
// Módulo responsável pelo formulário de cadastro e seu modal de confirmação.
// Depende de armazenamento.js para persistir o cadastro enviado.

import { salvarCadastro } from './armazenamento.js';

export function iniciarFormularioCadastro() {
  const form = document.getElementById('form-cadastro');
  const modal = document.getElementById('modal-confirmacao');
  const btnCancelar = document.getElementById('btn-cancelar');
  const btnConfirmar = document.getElementById('btn-confirmar');

  if (!form || !modal || !btnCancelar || !btnConfirmar) {
    console.error('Um ou mais elementos do formulário não foram encontrados.');
    return;
  }

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    modal.classList.add('aberto');
  });

  btnCancelar.addEventListener('click', function () {
    modal.classList.remove('aberto');
  });

  btnConfirmar.addEventListener('click', function () {
    modal.classList.remove('aberto');

    const dadosFormulario = new FormData(form);
    const cadastro = Object.fromEntries(dadosFormulario.entries());
    salvarCadastro(cadastro);

    window.location.href = 'sucesso.html';
  });
}

iniciarFormularioCadastro();
