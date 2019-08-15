export const followersSelector = state => state.followersReducers;

export const followersLoadingSelector = state =>
  followersSelector(state).loading;
export const followersDataSelector = state => followersSelector(state).data;
export const followerssuccessNothingSelector = state =>
  followersSelector(state).successNothing;
