fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);

    let html = "";
    for (let i = 0; i < postsArr.length; i++) {
      html += `
      <h3> ${postsArr[i].title} </h3>
      <p> ${postsArr[i].body} </p>
      <hr/>
      `;
    }
    document.getElementById("root").innerHTML = html;
    console.log(postsArr);
  });
