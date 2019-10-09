export const filmsSelector = state => state.FilmsListReducer;

export const filmsListSelector = state => filmsSelector(state).filmsList;
export const loaderFilmsListSelector = state => filmsSelector(state).loader;
