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

const appReducers = isLogin;

export default appReducers;
