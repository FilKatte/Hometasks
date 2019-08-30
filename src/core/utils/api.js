export const fetchLogIn = (username = "test@test.com", password = "123123") => {
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
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2bde50bdcc809a6230f17e9ba8e7f951&units=metric`
  ).then(response => response.json());
};
