import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ShowPreview.module.css";

class ShowPreview extends PureComponent {
  render() {
    const { data, successNothing } = this.props;

    return (
      <div>
        {successNothing
          ? "Не найдено"
          : data.map(dataObj => (
              <div className={styles.showPreview} key={dataObj.id}>
                <div className={styles.showPreview__title}>
                  <NavLink
                    to={`/shows/${dataObj.id}`}
                    className={styles.showPreview__link}
                  >
                    {dataObj.name}
                  </NavLink>
                </div>

                <div className={styles.showPreview__icon}>
                  <img
                    src={dataObj.image && dataObj.image.medium}
                    alt="Cover"
                  />
                </div>

                <div
                  className={styles.showPreview__summary}
                  dangerouslySetInnerHTML={{ __html: dataObj.summary }}
                />
              </div>
            ))}
      </div>
    );
  }
}

export default ShowPreview;
