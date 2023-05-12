import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

createPost({
  title: "My first post",
  body: "This is my first post",
});
