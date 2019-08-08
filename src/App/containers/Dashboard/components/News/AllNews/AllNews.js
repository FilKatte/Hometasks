import React from "react";
import styles from "./AllNews.module.css";

class AllNews extends React.Component {
  render() {
    return (
      <div className={styles.news}>
        <div className="container">
          <div className={styles.news__content}>All News</div>
        </div>
      </div>
    );
  }
}

export default AllNews;
