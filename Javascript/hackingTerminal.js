let msg = [
  "Initialized Hacking",
  "Reading your files",
  "Password files detected",
  "Sending all password files to server",
  "Cleaning up",
];

async function addItem(item) {
  await main();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
}

async function showMsg() {
 let t = setInterval(() => {
    let last = document.body.lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 500);
  for (const item of msg) {
    await addItem(item);
  }
  await main();
  clearInterval(t);
}

async function main() {
  return new Promise((resolve, reject) => {
    let rand = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, rand * 1000);
  });
}
showMsg();
