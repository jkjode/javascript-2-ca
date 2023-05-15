import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
// import { renderPostTemplates } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  // const post = posts.pop(); 
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}

testTemplate();