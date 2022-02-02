const getPosts = axios.get('https://jsonplaceholder.typicode.com/posts');
const getComments = axios.get('https://jsonplaceholder.typicode.com/comments');
const getPhotos = axios.get('https://jsonplaceholder.typicode.com/photos');

Promise.all([getPosts, getComments, getPhotos]).then((result) => {
  // console.log("data is loaded", result);
  const ex4Message = document.getElementById("ex4_message");
  ex4Message.style.display = "inline";
}).catch(() => {
  // Display error
})