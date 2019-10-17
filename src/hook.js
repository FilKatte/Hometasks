import { useState, useEffect } from "react";

export default function useFetch(data) {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/${data}/`)
      .then(response => response.json())
      .then(response => setList(response.results));
  }, [data]);

  return list;
}
