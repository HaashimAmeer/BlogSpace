fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);

    let html = "";
    for (let i = 0; i < postsArr.length; i++) {
      html += `
      <h2> ${postsArr[i].title} </h2>
      <p> ${postsArr[i].body} </p>
      <hr/>
      `;
    }
    document.getElementById("root").innerHTML = html;
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

    console.log(post);

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
