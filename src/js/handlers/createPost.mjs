import { createPost } from "../api/posts/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  /**
 * Adds a submit event listener to a form element and sends data to the API when the form is submitted.
 * @param {HTMLFormElement} form - The form element to listen for submit events.
 */

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      //   const action = form.action;
      //   const method = form.method;
      post.tags = [];
      // Send data to the API
      createPost(post);
    });
  }
}
