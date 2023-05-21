import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

listeners.checkIfLoggedIn(path);
listeners.logoutHandler();

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
} else if (path === "/profile/edit/") {
  listeners.setUpdateProfileListener();
} else if (path === "/feed/") {
  async function testTemplate() {
    const posts = await postMethods.getPosts();
    console.log(posts);
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
  }
  testTemplate();
  listeners.setSearchAndFilterListener();
} else if (path === "/post/") {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = await postMethods.getPost(id);
  const container = document.querySelector("#post");
  templates.renderOnePostTemplate(post, container);
} else if (path === "/profile/") {
  listeners.setViewProfileListener();
} 


