import { put, takeLatest } from "redux-saga/effects";
import { fetchLogInWorker, logInWatch } from "./saga";
import { logIn, logInSuccess } from "./duck";

describe("SAGAS", () => {
  it('should dispatch action "logIn" ', () => {
    const generator = logInWatch();
    expect(generator.next().value).toEqual(takeLatest(logIn, fetchLogInWorker));
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "LOG_IN_SUCCESS"', () => {
    const mockResponse = { response: "Some content" };
    const generator = fetchLogInWorker();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({ logInSuccess, json: "Some content" })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
