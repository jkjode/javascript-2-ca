import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostListener();
} else if (path === "/post/update/") {
  listeners.setUpdatePostListener();
} else if (path === "/post/index.html") {
  async function testTemplate() {
    const posts = await postMethods.getPosts();
    console.log(posts);
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
  }

  testTemplate();
}
