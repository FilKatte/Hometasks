import React from "react";
import styles from "./Followers.module.css";
import avatar from "./assets/default_avatar.png";

const isEmpty = require("lodash/isEmpty");

class Followers extends React.Component {
  handleSubmit = (event, login) => {
    const { searchRequest, followersRequest, ApiKey } = this.props;
    const value = login;

    event.preventDefault();
    const arg = { ApiKey: ApiKey, user: value };
    if (value) {
      searchRequest(arg);
      followersRequest(arg);
    }
  };

  render() {
    const { data, loading, successNothing } = this.props;

    return loading ? (
      <div className={styles.search__loading}>
        <div className={styles.search__loader} />
        <p className={styles.loading__text}>Loading</p>
      </div>
    ) : successNothing ? (
      <p className={styles.loading__text}>Нет подписчиков</p>
    ) : (
      !isEmpty(data) &&
      isEmpty(data.message) && (
        <div className={styles.followers}>
          <div className={styles.followers__personList}>
            {data.map((dataObj, id) => (
              <div
                key={id}
                className={styles.personList_item}
                onClick={e => this.handleSubmit(e, dataObj.login)}
              >
                <div className={styles.personList__title}>{dataObj.login}</div>

                <div>
                  <img
                    src={dataObj.avatar_url ? dataObj.avatar_url : avatar}
                    alt="Cover"
                    className={styles.personList__img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    );
  }
}

export default Followers;
