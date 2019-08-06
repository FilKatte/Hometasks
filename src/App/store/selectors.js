export const appSelector = state => state.appReducers;

export const isLoginSelector = state => appSelector(state).isLogin;
