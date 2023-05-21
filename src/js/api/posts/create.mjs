import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";
const method = "post";

/**
 * @description This function creates a new post URL
 * @param {Object} postData  - The post data object
 * @returns {Promise<Object>} A Promise that resolves to the post creation response.
 */

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
