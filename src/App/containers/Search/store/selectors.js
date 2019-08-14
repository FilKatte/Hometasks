export const searchSelector = state => state.searchReducers;

export const searchValueSelector = state => searchSelector(state).loading;
export const searchSuccessSelector = state => searchSelector(state).success;
export const successNothingSelector = state =>
  searchSelector(state).successNothing;
