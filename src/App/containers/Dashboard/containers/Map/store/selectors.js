export const mapSelector = state => state.mapReducers;

export const AddressListSelector = state =>
  mapSelector(state).AddressList.addressList;
export const loaderAddressListSelector = state =>
  mapSelector(state).AddressList.loader;

export const RouteSelector = state => mapSelector(state).Route.route;
export const RouteFlagSelector = state => mapSelector(state).Route.routeBuild;
export const loaderRouteSelector = state => mapSelector(state).Route.loader;

export const WeatherSelector = state => mapSelector(state).Weather.data;
