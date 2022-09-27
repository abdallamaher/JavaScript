/*
async function foo() {
  return 1;
}
=
// this don't block the main thread as already resolved
// Good when no Built_In-IO Function (setTimeout) in the function
function foo() {    
  return Promise.resolve(1);
}
!=
// this block the main thread till resolve
// is a must when Built_In-IO Function (setTimeout) in the function
function foo() {    
  return new Promise((resolve)=>{});
}
*/

async function runAsyncAwait(x) {
  while (x < 1000000) x++;
  console.log("Top");
  // await runAsync(x);
  await runPromise(x);
  return x;
}

async function runAsyncCPU(x) {
  while (x < 1000000) x++;
  console.log("Top");
  return x;
}

async function runAsync(x) {
  setTimeout(() => {
    console.log("Top");
  }, 6000);
  return x;
}

function runPromise(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Top");
      resolve(x);
    }, 6000);
  });
}

(async () => {
  // await runAsync(5); // Bottom Top
  //await runPromise(5); // Top Bottom
  // await runAsyncCPU(5); // Top Bottom
  //console.log("Bottom");

  runAsyncAwait(5).then(() => {
    console.log("Bottom");
  });
})();
