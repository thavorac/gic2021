async function helloFrom1() {
  let result = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('hello from 1');
    }, 2000)
  })
  return result;
}
async function helloFrom2() {
  let result = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('hello from 2');
    }, 2000)
  })
  return result;
}
async function helloFrom3() {
  let result = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('hello from 3');
    }, 2000)
  })
  return result;
}

helloFrom1().then(function(result) {
  console.log('result from 1', result);
  helloFrom2().then(function (result) {
    console.log('result from 2', result);
    helloFrom3().then(function(result) {
      console.log('result from 3', result);
    })
  });
});




