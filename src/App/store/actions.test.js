import * as constants from "./constants";
import * as actions from "./duck";

describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: constants.CHECK_IS_LOGIN
    };
    expect(actions.checkIsLogin()).toEqual(expectedAction);
  });
});

describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: constants.LOG_IN
    };
    expect(actions.logIn()).toEqual(expectedAction);
  });
});

describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: constants.LOG_IN_SUCCESS
    };
    expect(actions.logInSuccess()).toEqual(expectedAction);
  });
});
describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: constants.LOG_IN_FAILURE
    };
    expect(actions.logInFailure()).toEqual(expectedAction);
  });
});
describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: constants.LOG_OUT
    };
    expect(actions.logOut()).toEqual(expectedAction);
  });
});
describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: constants.CHANGE_LOCALE
    };
    expect(actions.changeLocale()).toEqual(expectedAction);
  });
});
