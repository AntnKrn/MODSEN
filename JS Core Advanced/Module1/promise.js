function getData(...urls) {
  let res = Promise.all(
    urls.map((item) => fetch(item).then((res) => res.json()))
  );
  res.then((data) => {
    console.log(data);
  });
}

getData(
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3"
);
