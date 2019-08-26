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

export const fetchWeather = () => {
  const name = "Saint+Petersburg";
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ea574594b9d36ab688642d5fbeab847e&units=metric`
  ).then(response => response.json());
};
