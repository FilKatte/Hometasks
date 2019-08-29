import React from "react";
import { connect } from "react-redux";
import { showRequest } from "./store/duck";
import { showSuccessSelector, showValueSelector } from "./store/selectors";
import styles from "./ShowPage.module.css";
import avatar from "./assets/default_avatar.png";
import film from "../ShowPreview/assets/default__image__film.png";
import moment from "moment";

const isEmpty = require("lodash/isEmpty");

const mapStateToProp = state => {
  return {
    data: showSuccessSelector(state),
    loading: showValueSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showRequest: id => dispatch(showRequest(id))
  };
};

class ShowPage extends React.Component {
  componentDidMount() {
    const {
      showRequest,
      match: { params }
    } = this.props;
    params.id && showRequest(params.id);
  }

  render() {
    const { data, loading } = this.props;
    return loading ? (
      <div className={styles.search__loading}>
        <div className={styles.search__loader} />
        <p className={styles.loading__text}>Loading</p>
      </div>
    ) : (
      <div>
        {!isEmpty(data) && (
          <div className={styles.showPage}>
            <div className={styles.showPage__info}>
              <div className={styles.info__image}>
                <img
                  src={(data.image && data.image.medium) || film}
                  alt="Cover"
                  className={styles.info__icon}
                />
              </div>

              <ul className={styles.info__list}>
                <li className={styles.info__item}>
                  <p className={styles.info__text}>Name</p>
                  <p className={styles.info__data}>{data.name}</p>
                </li>

                {data.premiered && (
                  <li className={styles.info__item}>
                    <p className={styles.info__text}>Year</p>
                    <p className={styles.info__data}>
                      {moment(data.premiered).format("YYYY")}
                    </p>
                  </li>
                )}

                {data.network && (
                  <li className={styles.info__item}>
                    <p className={styles.info__text}>Country</p>
                    <p className={styles.info__data}>
                      {data.network.country.name}
                    </p>
                  </li>
                )}

                {data.genres.length !== 0 && (
                  <li className={styles.info__item}>
                    <p className={styles.info__text}>Genres</p>
                    <p className={styles.info__data}>
                      {data.genres.join(", ")}
                    </p>
                  </li>
                )}
              </ul>
            </div>

            {data.summary && (
              <div className={styles.showPage__summary}>
                <p className={styles.summary__title}>About</p>
                <div
                  className={styles.summary__text}
                  dangerouslySetInnerHTML={{ __html: data.summary }}
                />
              </div>
            )}

            <div className={styles.showPage__personList}>
              {data._embedded.cast.map((dataObj, id) => (
                <div key={id} className={styles.personList_item}>
                  <div className={styles.personList__title}>
                    {dataObj.person.name}
                  </div>

                  <div>
                    <img
                      src={
                        dataObj.person.image
                          ? dataObj.person.image.medium
                          : avatar
                      }
                      alt="Cover"
                      className={styles.personList__img}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ShowPage);
