async function luck() {
  const sec = Math.floor(Math.random() * 10 + 1);
  console.log(sec);
  const res = new Promise((resolve, reject) => {
    if (sec <= 5) {
      setTimeout(() => {
        resolve("success");
      }, sec * 1000);
    } else {
      setTimeout(() => {
        reject("rejected");
      }, sec * 1000);
    }
  });

  console.log(await res);
}

luck();
