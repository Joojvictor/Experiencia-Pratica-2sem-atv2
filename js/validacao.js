// ===== validacao.js =====
// Módulo responsável pela validação visual em tempo real do formulário.

export function inicializarValidacaoFormulario() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  const campos = form.querySelectorAll('input[required]');

  const mensagensPorId = {
    email: 'Digite um e-mail válido (ex: nome@exemplo.com).',
    tel: 'Formato esperado: (00) 00000-0000.',
    cpf: 'Formato esperado: 000.000.000-00.',
    cep: 'Formato esperado: 00000-000.',
  };

  campos.forEach(function (campo) {
    let mensagem = campo.nextElementSibling;
    if (!mensagem || !mensagem.classList.contains('mensagem-erro')) {
      mensagem = document.createElement('small');
      mensagem.className = 'mensagem-erro';
      campo.insertAdjacentElement('afterend', mensagem);
    }

    function validarCampo() {
      if (campo.validity.valid) {
        campo.classList.remove('campo-invalido');
        campo.classList.add('campo-valido');
        mensagem.textContent = '';
        return;
      }

      campo.classList.remove('campo-valido');
      campo.classList.add('campo-invalido');

      if (campo.validity.valueMissing) {
        mensagem.textContent = 'Este campo é obrigatório.';
      } else if (campo.validity.typeMismatch || campo.validity.patternMismatch) {
        mensagem.textContent = mensagensPorId[campo.id] || 'Formato inválido.';
      } else {
        mensagem.textContent = 'Valor inválido.';
      }
    }

    campo.addEventListener('input', validarCampo);
    campo.addEventListener('blur', validarCampo);
  });
}

inicializarValidacaoFormulario();
