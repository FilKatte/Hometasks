import { combineReducers } from "redux";
import * as constants from "./constants";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));

export const checkIsLogin = () => ({
  type: constants.CHECK_IS_LOGIN
});

export const logIn = () => ({
  type: constants.LOG_IN
});

export const logOut = () => ({
  type: constants.LOG_OUT
});

const isLogin = (state = isAuth, action) => {
  switch (action.type) {
    case constants.CHECK_IS_LOGIN:
      if (isAuth) {
        return true;
      } else {
        return false;
      }
    case constants.LOG_IN:
      localStorage.setItem("isAuth", JSON.stringify(true));
      return true;
    case constants.LOG_OUT:
      localStorage.setItem("isAuth", JSON.stringify(false));
      return false;
    default:
      return state;
  }
};

const news = [
  {
    id: 1,
    text: "Последние новости перед долгожданным летом!",
    tag: ["Кадровые новости."],
    date: "2018-05-28",
    elect: false,
    important: true,
    new: false
  },
  {
    id: 2,
    text: "Теплые предпраздничные новости! ",
    tag: ["Кадровые новости;", "Про отдых в мае."],
    date: "2018-04-23",
    elect: true,
    important: false,
    new: false
  },
  {
    id: 3,
    text: "Лето приближается, новостей прибавляется! ",
    tag: ["Кадровые новости."],
    date: "2018-04-16",
    elect: false,
    important: true,
    new: true
  },
  {
    id: 4,
    text: "Бла бла бла",
    tag: ["События;", "Кадровые новости."],
    date: "2019-08-15",
    elect: false,
    important: false,
    new: false
  }
];

const News = (state = news) => {
  return state;
};

const appReducers = combineReducers({ isLogin, News });

export default appReducers;