import React from "react";
import Login from "./Login";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import configureMockStore from "redux-mock-store";

// describe("Тестим логинку", () => {
//   let wrapper, store;
//   beforeEach(() => {
//     const initialState = {
//       isLogin: false
//     };
//     store = mockStore(initialState);
//     wrapper = shallow(<Login store={store} />);
//   });

//   it("первый тест", () => {
//     // test that the state values were correctly passed as props
//     // expect(wrapper.props().lastRolledNumber).toBe(1);
//     console.log(wrapper.props().isLogin);
//   });
// });

describe("Test LOGIN", () => {
  const initialState = {
    appReducers: {
      isLogin: false,
      failure: "",
      loader: true
    }
  };
  const mockStore = configureMockStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Login />
        </IntlProvider>
      </Provider>
    );
  });

  it("+++ render the connected(SMART) component", () => {
    expect(wrapper.find(Login).prop("isLogin")).toEqual(initialState.isLogin);
  });

  // it('+++ check Prop matches with initialState', () => {
  //    expect(wrapper.find(Home).prop('output')).toEqual(initialState.output)
  // });

  // it('+++ check action on dispatching ', () => {
  //     let action
  //     store.dispatch(addInputs(500))
  //     store.dispatch(subtractInputs(100))
  //     action = store.getActions()
  //     expect(action[0].type).toBe("ADD_INPUTS")
  //     expect(action[1].type).toBe("SUBTRACT_INPUTS")
  // });
});
