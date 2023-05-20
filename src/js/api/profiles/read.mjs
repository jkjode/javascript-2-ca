import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profile";

export async function getprofile() {
  const getProfileURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }

  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
