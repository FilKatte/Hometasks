import React, { PureComponent } from "react";
import styles from "./UserInfo.module.css";
import film from "./assets/default__image__film.png";

const isEmpty = require("lodash/isEmpty");

class UserInfo extends PureComponent {
  render() {
    const { data, successNothing } = this.props;

    return (
      <div className={styles.user}>
        {successNothing ? (
          <p className={styles.user__nothing}>По запросу ничего не найдено</p>
        ) : (
          !isEmpty(data.login) && (
            <div className={styles.user__person}>
              <img
                src={data.avatar_url ? data.avatar_url : film}
                alt="Cover"
                className={styles.user__icon}
              />

              <div className={styles.user__info}>
                {" "}
                {data.name && (
                  <p className={styles.user__text}>Name: {data.name}</p>
                )}
                <p className={styles.user__text}>login: {data.login}</p>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default UserInfo;
