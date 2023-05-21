import * as storage from "../storage/index.mjs";

export function checkIfLoggedIn(path) {
  if (
    !storage.checkIfLoggedIn() &&
    path !== "/" &&
    path !== "/index.html" &&
    path !== "/profile/login/" &&
    path !== "/profile/register/"
  ) {
    window.location.href = "/";
  }
}
