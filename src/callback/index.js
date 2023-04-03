function suma(n1, n2) {
  return n1 + n2
}

function resta(n1, n2) {
  return n1 - n2
}

function multi(n1, n2) {
  return n1 + n2
}

function div(n1, n2) {
  return n1 / n2
}

function calculadora(n1, n2, operacion) { //operacion es el callback
  return operacion(n1, n2);
}

console.log(calculadora(2, 2, suma));