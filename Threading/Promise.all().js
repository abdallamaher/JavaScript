let time = Date.now();

/*
// Prosime.all() is not the best option in cup-parallel tasks
// but good for I/O tasks

async function wait_cpu(fn) {
  return new Promise((resolve) => {
    let x = 0;
    while (x < 10000000) x++;
    console.log(`Finished ${fn} Time ${Date.now() - time}`)
    resolve(x);
  });
}
async function f1() {
  console.log("start f1");
  for (let i = 0; i < 4; i++) await wait_cpu(1);
  console.log("finish f1");
}

async function f2() {
  console.log("start f2");
  for (let i = 0; i < 4; i++) await wait_cpu(2);
  console.log("finish f2");
}
Promise.all([f1(), f2()]);

*/

// promise.all() is the best option in IO-concurrent tasks

async function wait_1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait_1", Date.now() - time);
      resolve(1);
    }, 4000);
  });
}
async function wait_2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait_2", Date.now() - time);
      resolve(1);
    }, 4000);
  });
}
async function f1x() {
  return new Promise(async () => {
    console.log("start f1");
    for (let i = 0; i < 2; i++) await wait_1();
    console.log("finish f1");
  });
}
async function f2x() {
  return new Promise(async () => {
    console.log("start f2");
    for (let i = 0; i < 2; i++) await wait_2();
    console.log("finish f2");
  });
}

async function f1() {
  console.log("start f1");
  for (let i = 0; i < 4; i++) await wait_1();
  console.log("finish f1");
}

async function f2() {
  console.log("start f2");
  for (let i = 0; i < 4; i++) await wait_2();
  console.log("finish f2");
}
Promise.all([f1(), f2()]);

