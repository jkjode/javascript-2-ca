import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";

const action = "/posts";
const method = "put";

/**
 * @description This function updates a post.
 * @param {Object} postData - The post data object
 * @returns - A Promise that resolves to the post update response.
 */

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Post ID is required");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
