import * as constants from "./constants";
import { isLogin } from "./duck";

describe("isLogin", () => {
  it('should handle "CHECK_IS_LOGIN " action', () => {
    expect(isLogin({}, { type: constants.CHECK_IS_LOGIN })).toEqual({
      isAuth: false
    });
  });
  it('should handle "LOG_IN" action', () => {
    expect(isLogin({}, { type: constants.LOG_IN })).toEqual({
      loader: true
    });
  });
  it('should handle "constants.LOG_IN_SUCCESS" action', () => {
    const success = {
      success: "true",
      error: ""
    };
    expect(
      isLogin({}, { type: constants.LOG_IN_SUCCESS, json: success })
    ).toEqual({ success: success, loader: false });
  });
  it('should handle "LOG_IN_FAILURE" action', () => {
    expect(isLogin({}, { type: constants.LOG_IN_FAILURE })).toEqual({
      failure: undefined || "",
      loader: false
    });
  });
  it('should handle "LOG_OUT" action', () => {
    expect(isLogin({}, { type: constants.LOG_OUT })).toEqual({ isAuth: false });
  });
});
