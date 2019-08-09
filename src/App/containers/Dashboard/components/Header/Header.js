import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import logo from "../assets/logo.svg";
import Avatar from "../Avatar";
import Menu from "../Menu";
import { logOut } from "../../../../store/duck";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

class Header extends React.Component {
  state = {
    isOpen: false
  };

  showMenu = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const { logOut } = this.props;
    const className = isOpen
      ? classNames(styles.burger, styles.active)
      : classNames(styles.burger);

    return (
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__container}>
            <div className={className} onClick={this.showMenu}>
              <span className={styles.burger__line} />
            </div>
            <div className={styles.logo}>
              <p className={styles.logo_link}>
                <img className={styles.logo__icon} src={logo} alt="SML logo" />
              </p>
            </div>

            <h1 className={styles.header__title}>Еженедельный дайджест</h1>
          </div>

          <Avatar logOut={logOut} />
        </div>
        {isOpen && <Menu />}
      </header>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
