export function postTemplateA(postData) {
  return `<div class="post" id=${postData.id}>${postData.title}</div>`;
}

export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("col-md-4");
  post.classList.add("post");
  post.classList.add("border");
  post.classList.add("w-25");
  post.classList.add("mh-25");
  post.classList.add("m-4");
  post.innerText = postData.title;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    img.classList.add("mt-5");
    img.classList.add("img-fluid");
    post.append(img);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
  parent.classList.add("row");
  // parent.append(postTemplateB(postDataList[1]))
  console.log(postDataList, parent);
}
