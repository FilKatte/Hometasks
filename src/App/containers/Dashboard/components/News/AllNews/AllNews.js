import React from "react";
import styles from "./AllNews.module.css";
import { NewsSelector } from "../../../../../store/selectors";
import { connect } from "react-redux";
import moment from "moment";
import classNames from "classnames";

const mapStateToProps = state => {
  return {
    news: NewsSelector(state)
  };
};

class AllNews extends React.Component {
  render() {
    const { news } = this.props;

    return (
      <div className={styles.news}>
        <div className="container">
          <div className={styles.news__content} />
          <h1 className={styles.news__title}>SML Новости</h1>
          <ul className={styles.news__list}>
            {news.map(newObj => (
              <li
                className={
                  newObj.new
                    ? classNames(styles.news__item, styles.news__item__new)
                    : classNames(styles.news__item)
                }
                key={newObj.id}
              >
                <div className={styles.news__date}>
                  {moment(newObj.date).format("DD.MM.YY")}
                </div>
                <div className={styles.news__text}>{newObj.text}</div>
                <div className={styles.news__tag}>
                  <ul className={styles.tag__list}>
                    {newObj.tag.map((tag, id) => (
                      <li key={id} className={styles.tag__item}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(AllNews);
