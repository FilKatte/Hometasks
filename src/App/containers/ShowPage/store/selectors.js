export const showSelector = state => state.showReducers;

export const showValueSelector = state => showSelector(state).loading;
export const showSuccessSelector = state => showSelector(state).success;