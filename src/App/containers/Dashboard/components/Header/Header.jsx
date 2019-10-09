import React from "react";
import styles from "./Header.module.css";
import { logOut } from "../../../../store/duck";
import { connect } from "react-redux";
import logo from "../../assets/Star_Wars_Yellow_Logo.png";
import Menu from "./../Menu";

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

class Header extends React.Component {
  handleClick = () => {
    const { logOut } = this.props;
    logOut();
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.logo}>
            <img className={styles.logo__icon} src={logo} alt="logo" />
          </div>
          <Menu />
          <div className={styles.logOut}>
            <button
              onClick={this.handleClick}
              className={styles.logOut__button}
            >
              Log out
            </button>
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
