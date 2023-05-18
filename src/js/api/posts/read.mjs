// export async function getPosts() {}

// export async function getPost(id) {}

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
