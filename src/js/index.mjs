import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

// createPost({
//   title: "My first post",
//   body: "This is my first post",
// });

// updatePost({
//   id: 5906,
//   title: "My first post UPDATED",
//   body: "This is my first UPDATED post",
// });

// removePost(5906);

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
post.getPosts().then(console.log);
