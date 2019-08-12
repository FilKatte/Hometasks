export const searchSelector = state => state.searchReducers;

export const searchValueSelector = state => searchSelector(state).search;
export const searchSuccessSelector = state => searchSelector(state).success;