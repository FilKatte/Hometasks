import { put, takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import { fetchLogInWorker, logInWatch } from "./saga";

describe("SAGAS", () => {
  it('should dispatch action "logIn" ', () => {
    const generator = logInWatch();
    expect(generator.next().value).toEqual(
      takeLatest(constants.LOG_IN, fetchLogInWorker)
    );
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "LOG_IN_SUCCESS"', () => {
    const mockResponse = { response: "Some content" };
    const generator = fetchLogInWorker();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: constants.LOG_IN_SUCCESS, json: "Some content" })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
