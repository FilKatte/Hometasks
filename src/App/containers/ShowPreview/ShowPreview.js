import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ShowPreview.module.css";
import film from "./assets/default__image__film.png";

class ShowPreview extends PureComponent {
  render() {
    const { data, successNothing } = this.props;

    return (
      <div className={styles.showPreview}>
        {successNothing ? (
          <p className={styles.showPreview__nothing}>
            По запросу ничего не найдено
          </p>
        ) : (
          data.map(dataObj => (
            <NavLink
              to={`/shows/${dataObj.id}`}
              className={styles.showPreview__link}
              key={dataObj.id}
            >
              <div className={styles.showPreview__Show}>
                <div className={styles.showPreview__title}>{dataObj.name}</div>

                <div className={styles.showPreview__image}>
                  <img
                    src={dataObj.image ? dataObj.image.medium : film}
                    alt="Cover"
                    className={styles.showPreview__icon}
                  />
                </div>

                <div
                  className={styles.showPreview__summary}
                  dangerouslySetInnerHTML={{ __html: dataObj.summary }}
                />
              </div>
            </NavLink>
          ))
        )}
      </div>
    );
  }
}

export default ShowPreview;
