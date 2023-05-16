import { createPost } from "../api/posts/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

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
