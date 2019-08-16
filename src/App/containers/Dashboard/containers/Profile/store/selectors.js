export const profileSelector = state => state.profileReducers;

export const nameSelector = state => profileSelector(state).data.name;
export const numberSelector = state => profileSelector(state).data.number;
export const dateSelector = state => profileSelector(state).data.date;
export const cvvSelector = state => profileSelector(state).data.cvv;
