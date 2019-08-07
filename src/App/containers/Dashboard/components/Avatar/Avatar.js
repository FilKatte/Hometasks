import React from "react";
import styles from "./Avatar.module.css";
import avatar from "../assets/avatar.svg";
import logout from "../assets/logout.svg";

class Avatar extends React.Component {
  state = {
    isOpen: false
  };

  ExitRef = React.createRef();

  listener = e => {
    if (this.ExitRef.current && this.ExitRef.current.contains(e.target)) {
      return;
    }
    e.stopPropagation();
    this.setState({ isOpen: false }, () => {
      document.body.removeEventListener("click", this.listener);
    });
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.state.isOpen
        ? document.body.addEventListener("click", this.listener)
        : document.body.removeEventListener("click", this.listener);
    });
  };

  handleLogOut = () => {
    const { logOut } = this.props;
    setTimeout(() => {
      logOut();
    }, 100);
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className={styles.avatar} onClick={this.handleClick}>
        <button className={styles.avatar_button}>
          <img className={styles.avatar__icon} src={avatar} alt="avatar" />
        </button>

        {isOpen && (
          <div className={styles.logout} ref={this.ExitRef}>
            <button
              className={styles.logout__button}
              onClick={this.handleLogOut}
            >
              <img className={styles.logout__icon} src={logout} alt="logout" />
              <span className={styles.logout__text}>Выход из системы</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Avatar;
