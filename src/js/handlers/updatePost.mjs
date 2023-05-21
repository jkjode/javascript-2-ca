import { getPost, updatePost } from "../api/posts/index.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);

    console.log(post);

    form.title.value = post.title;
    form.body.value = post.body;
    if (post.tags) {
      form.tags.value = post.tags;
    }
    if (post.media) {
      form.media.value = post.media;
    }

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.tags = post.tags.split(",").map((tag) => tag.trim());
      post.id = id;

      // Send data to the API
      updatePost(post);

      // Redirect to the profile
      location.assign("/profile/");
    });
  }
}
