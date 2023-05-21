// Decided not to use this template as it was not responsive enough for the project.
// export function postTemplateA(postData) {
//   return `<div class="post" id=${postData.id}>${postData.title}</div>`;
// }

/**
 * Generates the HTML template for rendering a single post.
 * @param {Object} postData - The data of the post.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.body - The body content of the post.
 * @param {string} postData.media - The URL of the post's media (optional).
 * @param {string[]} postData.tags - The tags associated with the post (optional).
 * @returns {HTMLElement} The generated post HTML element.
 */

export function postTemplateB(postData) {
  const postLink = document.createElement("a");
  postLink.href = `/post/?id=${postData.id}`;
  const post = document.createElement("div");
  postLink.append(post);
  postLink.classList.add("col-md-4");
  postLink.classList.add("post");
  postLink.classList.add("border");
  postLink.classList.add("w-25");
  postLink.classList.add("mh-25");
  postLink.classList.add("m-4");
  postLink.classList.add("text-decoration-none");
  postLink.classList.add("text-light");
  const postTitle = document.createElement("h2");
  postTitle.innerText = postData.title;
  post.append(postTitle);

  const postBody = document.createElement("p");
  postBody.innerText = postData.body;
  post.append(postBody);

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    img.classList.add("mt-5");
    img.classList.add("mb-2");
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

  return postLink;
}

/**
 * Renders a single post template and appends it to the specified parent element.
 * @param {Object} postData - The data of the post.
 * @param {HTMLElement} parent - The parent element to append the post template.
 */

export function renderPostTemplates(postDataList, parent) {
  parent.innerHTML = "";
  parent.append(...postDataList.map(postTemplateB));
  parent.classList.add("row");
  // parent.append(postTemplateB(postDataList[1]))
  // console.log(postDataList, parent);
}
