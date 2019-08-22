export const fetchLogIn = (username, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`
  ).then(response => response.json());
};

export const fetchAddressList = () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`).then(response =>
    response.json()
  );
};

export const fetchRoute = (start, end) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${start}&address2=${end}`
  ).then(response => response.json());
};
