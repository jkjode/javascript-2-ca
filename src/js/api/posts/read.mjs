// export async function getPosts() {}

// export async function getPost(id) {}

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";

const action = "/posts";

/**
 * @description This function gets all posts and lets you sort by sortType or filter by tag.
 * @param {string} tag 
 * @param {string} sortType 
 * @returns posts filtered or sorted
 */

export async function getPosts(tag, sortType) {
  const getPostsURL = `${API_SOCIAL_URL}${action}?_author=true${tag ? `&_tag=${tag}` : ""}${
    sortType ? `&sort=created&sortOrder=${sortType}` : ""
  }`;

  const response = await authFetch(getPostsURL);
  return await response.json();
}

/**
 * @description This function gets a post by id.
 * @param {*} id  
 * @throws {Error} If there is no id
 * @returns The post with the given id.
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
