export const showSelector = state => state.showReducers;

export const showValueSelector = state => showSelector(state).search;
export const showSuccessSelector = state => showSelector(state).success;