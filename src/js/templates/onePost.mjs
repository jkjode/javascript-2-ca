export function postTemplateC(postData) {

    const post = document.createElement("div");
    post.classList.add("col-md-4");
    post.classList.add("post");
    post.classList.add("border");
    post.classList.add("w-25");
    post.classList.add("mh-25");
    post.classList.add("m-4");
    post.innerText = postData.title;
  
    const postBody = document.createElement("p");
    postBody.innerText = postData.body;
    post.append(postBody);
  
    if (postData.media) {
      const img = document.createElement("img");
      img.src = postData.media;
      img.alt = `Image from ${postData.title}`;
      img.classList.add("mt-5");
      img.classList.add("img-fluid");
      post.append(img);
    }
  
    if (postData.tags.length > 0) {
        const tags = document.createElement("div");
        tags.classList.add("tags");
        tags.classList.add("d-flex");
        tags.innerHTML = "<p class= 'pe-2'>Tags: </p>";
        postData.tags.forEach((tag) => {
          const tagElement = document.createElement("p");
          tagElement.classList.add("tag");
          tagElement.innerText = `${tag}, `;
          tagElement.classList.add("pe-2");
          tags.append(tagElement);
        });
        post.append(tags);
      }

    return post;
  }
  
  export function renderOnePostTemplate(postData, parent) {
    parent.append(postTemplateC(postData));
    console.log(postData, parent);
  }
  
  