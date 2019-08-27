import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("Приложение написано с использованием gDSFP", () => {
  const wrapper = shallow(<App />);

  it("Стейт содержит только 2 поля, isLogin и locale", () => {
    const state = wrapper.props();
    expect(Object.keys(props).sort()).toEqual(["isLogin", "locale"].sort());
  });

  describe("Компонент содержит", () => {
    it("Метод componentDidMount", () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });
  });

  describe("Компонент НЕ содержит", () => {
    it("Статичный метод getDerivedStateFromProps", () => {
      expect(Show.getDerivedStateFromProps).toBeUndefined();
    });
    it("Метод componentDidUpdate", () => {
      expect(wrapper.instance().componentDidMount).toBeUndefined();
    });
  });
});
