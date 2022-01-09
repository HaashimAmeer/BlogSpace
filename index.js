let postsArr = [];

function renderPosts() {
  let html = "";
  for (let i = 0; i < postsArr.length; i++) {
    html += `
      <h2> ${postsArr[i].title} </h2>
      <p> ${postsArr[i].body} </p>
      <hr/>
      `;
  }
  document.getElementById("root").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArr = data.slice(0, 5);
    renderPosts();

    // console.log(postsArr);
  });

document
  .getElementById("new-post")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const postTitle = document.getElementById("post-title").value;
    const postBody = document.getElementById("post-body").value;

    let post = {
      title: postTitle,
      body: postBody,
    };

    document.getElementById("new-post").reset();

    // console.log(post);

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        postsArr.unshift(post);
        renderPosts();
        console.log(post);
      });
  });
