import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logOut, changeLocale } from "../../../../store/duck";
import { localeSelector } from "../../../../store/selectors";
import { clearData } from "../Profile/store/duck";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import SelectLanguage from "../../../../shared/SelectLanguage";

const mapStateToProps = state => {
  return {
    locale: localeSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    clearData: () => dispatch(clearData()),
    changeLocale: locale => dispatch(changeLocale(locale))
  };
};

class Header extends React.Component {
  handleClick = () => {
    const { logOut, clearData } = this.props;

    logOut();
    clearData();
  };

  handleChange = value => {
    const { changeLocale } = this.props;
    changeLocale(value.value);
  };

  render() {
    const { locale } = this.props;
    const value = { value: locale, label: locale.toUpperCase() };

    return (
      <header className={styles.header}>
        <div className={styles.header__content}>
          <h1 className={styles.header__title}>Loft Taxi</h1>
          <div className={styles.header__nav}>
            <div className={styles.header__link}>
              <NavLink to="/dashboard/map">
                <Button>
                  <FormattedMessage id="header_button_map_text" />
                </Button>
              </NavLink>
            </div>
            <div className={styles.header__link}>
              <NavLink to="/dashboard/profile">
                <Button>
                  <FormattedMessage id="header_button_profile_text" />
                </Button>
              </NavLink>
            </div>
            <div className={styles.header__button}>
              <Button onClick={this.handleClick}>
                <FormattedMessage id="header_button_logout_text" />
              </Button>
            </div>

            <SelectLanguage value={value} handleChange={this.handleChange} />
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

Header.propTypes = {
  logOut: PropTypes.func,
  clearData: PropTypes.func,
  locale: PropTypes.string
};
