function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const yi = gen();
console.log(yi.next().value);
console.log(yi.next().value);
console.log(yi.next().value);

function* iterable(array) {
  for(let value of array) {
    yield value;
  }
}

const arr = [1,2,3,4,5,6];

const it = iterable(arr);
console.log(it.next().value);
