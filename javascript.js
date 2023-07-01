// Defina a data final do contador
var dataFinal = new Date('2023-12-31 23:59:59').getTime();

// Atualize o contador a cada segundo
var contadorInterval = setInterval(function() {
  // Obtenha a data e hora atual
  var dataAtual = new Date().getTime();

  // Calcule a diferença entre a data final e a data atual
  var diferenca = dataFinal - dataAtual;

  // Calcule os dias, horas, minutos e segundos restantes
  var dias = Math.floor(diferenca / (1000 * 60 * 60 * 10));
  var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Exiba o contador no elemento HTML
  document.getElementById('contador').innerHTML = dias + ' : ' + horas + ' : ' + minutos + ' : ' + segundos + '';

  // Verifique se o contador chegou a zero
  if (diferenca < 0) {
    clearInterval(contadorInterval);
    document.getElementById('contador').innerHTML = 'Contagem encerrada';
  }
}, 1000);
