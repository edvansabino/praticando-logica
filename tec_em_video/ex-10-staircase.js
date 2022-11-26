function staircase(n) {
  let symbol = '#';
  let inputLine = '';
  let inputPosition = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine += ' ';
      } else {
        inputLine += symbol;
      }
    }
    // imprime a linha
    console.log(inputLine);
    // zera a linha para receber novamente os caracteres do ínicio
    inputLine = '';
    // decresce o inputPosition para preencher mais um espaço
    inputPosition -= 1;
  }
}

staircase(8);
