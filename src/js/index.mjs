import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostListener();
} else if (path === "/post/update/") {
  listeners.setUpdatePostListener();
}

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   // const post = posts.pop();
//   const container = document.querySelector("#post");
//   templates.renderPostTemplates(posts, container);
// }

// testTemplate();
