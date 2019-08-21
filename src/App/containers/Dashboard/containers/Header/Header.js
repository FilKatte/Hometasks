import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logOut } from "../../../../store/duck";
import { clearData } from "../Profile/store/duck";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    clearData: () => dispatch(clearData())
  };
};

class Header extends React.Component {
  handleClick = () => {
    const { logOut, clearData } = this.props;

    logOut();
    clearData();
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header__content}>
          <h1 className={styles.header__title}>Loft Taxi</h1>
          <div className={styles.header__nav}>
            <div className={styles.header__link}>
              <NavLink to="/dashboard/map">
                <Button>Карта</Button>
              </NavLink>
            </div>
            <div className={styles.header__link}>
              <NavLink to="/dashboard/profile">
                <Button>Профиль</Button>
              </NavLink>
            </div>
            <Button onClick={this.handleClick}>Выйти</Button>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header);

Header.propTypes = {
  logOut: PropTypes.func,
  clearData: PropTypes.func
};
