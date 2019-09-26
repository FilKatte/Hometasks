import React from "react";
import styles from "./Header.module.css";
import { logOut } from "../../../../store/duck";
import { connect } from "react-redux";

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
          <div className={styles.header__button}>
            <button onClick={this.handleClick}>Log out</button>
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
