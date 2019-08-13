export const searchSelector = state => state.searchReducers;

export const searchValueSelector = state => searchSelector(state).loading;
export const searchSuccessSelector = state => searchSelector(state).success;
export const resultSuccessSelector = state => searchSelector(state).result;