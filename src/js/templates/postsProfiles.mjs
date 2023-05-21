import * as postMethods from "../api/posts/index.mjs";

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
  const post = document.createElement("div");

  post.id = postData.id;
  post.classList.add("col-md-4");
  post.classList.add("post");
  post.classList.add("border");
  post.classList.add("w-25");
  post.classList.add("mh-25");
  post.classList.add("m-4");
  post.classList.add("text-decoration-none");
  post.classList.add("text-light");
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

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-flex");
  const editButtonLink = document.createElement("a");
  editButtonLink.href = `/post/edit/?id=${postData.id}`;
  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-primary");
  editButton.innerHTML = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("btn-danger");
  buttonContainer.append(deleteButton);
  editButtonLink.append(editButton);
  buttonContainer.append(editButtonLink);
  post.append(buttonContainer);
  return post;
}

/**
 * Renders the templates for profile posts and appends them to the specified parent element.
 * @param {Object[]} postDataList - An array of post data objects.
 * @param {HTMLElement} parent - The parent element to append the post templates.
 */

export function renderProfilePostsTemplates(postDataList, parent) {
  parent.innerHTML = "";
  parent.append(...postDataList.map(postTemplateB));
  parent.classList.add("row");
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      const id = e.target.parentElement.parentElement.id;
      await postMethods.removePost(id);
      window.location.reload();
    });
  });
}
