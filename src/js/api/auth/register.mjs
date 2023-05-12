import { API_SOCIAL_URL } from "../constants.mjs";

export async function register(profile, action, method) {
  const registerURL = API_SOCIAL_URL + action;
  console.log(registerURL);
}
