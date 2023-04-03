const promise = new Promise(function (resolve, reject) {
  resolve('hey!');
});

const cow = 5;

const countCows = new Promise(function (resolve, reject) {
  if (cow > 10) {
    resolve('tenemos leche');
  } else {
    reject('there is no cows');
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log('final'));