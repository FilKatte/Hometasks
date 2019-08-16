export const SignIn = (username, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`
  ).then(response => response.json());
};
