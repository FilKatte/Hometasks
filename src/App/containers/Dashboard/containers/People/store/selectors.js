export const peopleSelector = state => state.PeopleListReducer;

export const peopleListSelector = state => peopleSelector(state).peopleList;
export const nextLinkSelector = state => peopleSelector(state).nextLink;
export const loaderPeopleListSelector = state => peopleSelector(state).loader;
