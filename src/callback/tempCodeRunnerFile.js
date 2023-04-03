setTimeout(function () {
  console.log('hola');
}, 2000);

function greeting(name) {
  console.log(`hola ${name}`);
}

setTimeout(greeting, 2000, 'Oscar');