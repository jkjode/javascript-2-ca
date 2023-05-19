import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const json = await response.json();
  if (response.ok) {
    return json;
  }

  console.log(json);

  throw new Error(json.errors[0].message);

  // const { accessToken, ...user } = await response.json();


  // alert("You have successfully logged in!");
}
