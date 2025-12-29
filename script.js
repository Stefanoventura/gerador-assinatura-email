/* ================================
   ATUALIZA NOME E CARGO EM TEMPO REAL
================================ */
function atualizarAssinatura() {
  document.getElementById('nome').innerText =
    document.getElementById('inputNome').value || 'Nome';

  document.getElementById('cargo').innerText =
    document.getElementById('inputCargo').value || 'Cargo';
}

/* ================================
   MÁSCARA DE TELEFONE INTELIGENTE
   - 9 dígitos → 0 0000-0000
   - 8 dígitos → 0000-0000
   - 4 dígitos → 0000
================================ */
function mascaraTelefone(input) {
  let valor = input.value.replace(/\D/g, '');

  // Limite máximo
  if (valor.length > 13) {
    valor = valor.slice(0, 13);
  }

  let ddd = '';
  let numero = valor;

  // Só considera DDD se tiver mais que 8 números
  if (valor.length > 8) {
    ddd = valor.slice(0, 2);
    numero = valor.slice(2);
  }

  let numeroFormatado = numero;

  // 9 dígitos
  if (numero.length === 9) {
    numeroFormatado = numero.replace(/(\d)(\d{4})(\d{4})/, '$1 $2-$3');
  }
  // 8 dígitos
  else if (numero.length === 8) {
    numeroFormatado = numero.replace(/(\d{4})(\d{4})/, '$1-$2');
  }
  // 4 dígitos
  else if (numero.length === 4) {
    numeroFormatado = numero;
  }

  // Monta resultado final
  let resultado = numeroFormatado;

  if (ddd) {
    resultado = `(${ddd}) ${numeroFormatado}`;
  }

  input.value = resultado;

  document.getElementById('telefone').innerText =
    resultado || '(34) 9 0000-0000';
}

/* ================================
   GERA IMAGEM PNG DA ASSINATURA
================================ */
function gerarImagem() {
  html2canvas(document.getElementById('assinatura'), {
    scale: 3,
    useCORS: true,
    backgroundColor: null
  }).then(canvas => {

    const link = document.createElement('a');
    link.download = 'assinatura-email.png';
    link.href = canvas.toDataURL('image/png');
    link.click();

  });
}