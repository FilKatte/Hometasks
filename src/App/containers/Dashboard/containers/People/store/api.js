import axios from "axios";

export const fetchPeopleList = url => {
  return axios({
    method: "get",
    url
  });
};
