setTimeout(function () {
  console.log('hola');
}, 2000);

function greeting(name) {
  console.log(`hola ${name}`);
}

setTimeout(greeting, 2000, 'Oscar'); //si mi funcion recibe parametros se pocisionaris en el 3 argumento de setTimeut