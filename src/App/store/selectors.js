export const appSelector = state => state.appReducers;

export const getApiKeySelector = state => appSelector(state).ApiKey;
