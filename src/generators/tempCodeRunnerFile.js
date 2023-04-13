
function* iterable(array) {
  for(let value of array) {
    yield value;
  }
}

const arr = [1,2,3,4,5,6];

const it = iterable(arr);
console.log(it.next().value);