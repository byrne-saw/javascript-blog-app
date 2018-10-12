var postTemplate = document.querySelector('#blog-post');
var postContainer = document.querySelector('.row');

axios.get("http://localhost:3000/api/posts").then(function(response) {
  var posts = response.data["posts"];
  console.log(posts);

  posts.forEach(function(post) {
    var postClone = postTemplate.content.cloneNode(true);

    postClone.querySelector('.blog-title').innerText = post.title;
    postClone.querySelector('.blog-body').innerText = post.body;

    postContainer.appendChild(postClone);
  });
});