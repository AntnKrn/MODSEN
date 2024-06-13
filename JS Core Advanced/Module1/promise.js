function getDataFromAPI(...urls) {
  const requests = urls.map((item) => {
    console.log(item);
    return fetch(item);
  });
  Promise.all(requests)
    .then((responses) =>
      responses.map((response) => {
        return response.json();
      })
    )
    .then((jsons) => jsons.forEach((json) => console.log(json)));
}

getDataFromAPI(
  "https://jsonplaceholder.typicode.com/postks/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3"
);

/* fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
 */
