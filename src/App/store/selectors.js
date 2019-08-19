export const appSelector = state => state.appReducers;

export const isLoginSelector = state => appSelector(state).isLogin.isAuth;
export const loaderSelector = state => appSelector(state).isLogin.loader;
export const errorLoginSelector = state =>
  appSelector(state).isLogin.success.error;
