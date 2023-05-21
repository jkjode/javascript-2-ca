import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../../api/constants.mjs";

const action = "/posts";
const method = "delete";

/**
 * @description This function deletes a post.
 * @param {} id  - The post id
 * @returns  {Promise<Object>} A Promise that resolves to the post deletion response.
 */

export async function removePost(id) {
  if (!id) {
    throw new Error("Post ID is required to delete a post");
  }

  const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;
  const response = await authFetch(removePostURL, {
    method,
  });

  return await response.json();
}
