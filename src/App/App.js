import React from "react";
import "./App.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { isLoginSelector, localeSelector } from "./store/selectors";
import { connect } from "react-redux";
import { checkIsLogin, changeLocale } from "./store/duck";
import Login from "./containers/Login";
import AppRouter from "./components/AppRouter";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { translations } from "../core/translations";
import SelectLanguage from "./shared/SelectLanguage";

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state),
    locale: localeSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkIsLogin: () => dispatch(checkIsLogin()),
    changeLocale: locale => dispatch(changeLocale(locale))
  };
};

const options = [{ value: "ru", label: "RU" }, { value: "en", label: "EN" }];

class App extends React.Component {
  state = {
    value: options[0]
  };

  componentDidMount() {
    const { checkIsLogin } = this.props;
    checkIsLogin();
  }

  handleChange = value => {
    const { changeLocale } = this.props;

    changeLocale(value.value);

    this.setState({ value });
  };

  render() {
    const { isLogin, locale } = this.props;
    const { value } = this.state;
    console.log(locale);

    return (
      <IntlProvider locale={locale} messages={translations[locale]}>
        <BrowserRouter>
          <div className="wrapper">
            <div className="app_select">
              <SelectLanguage
                value={value}
                options={options}
                handleChange={this.handleChange}
              />
            </div>
            <Switch>
              <PrivateRoute
                path="/dashboard"
                permited={isLogin}
                component={AppRouter}
              />
              <Route exact path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const PrivateRoute = ({ component: Component, permited, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permited ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

App.propTypes = {
  isLogin: PropTypes.bool,
  checkIsLogin: PropTypes.func
};
