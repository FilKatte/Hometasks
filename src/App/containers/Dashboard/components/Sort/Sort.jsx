import React from "react";
import styles from "./Sort.module.css";

class Sort extends React.Component {
  handleClickSortAs = () => {
    const { sortAsFilmList } = this.props;
    sortAsFilmList();
  };

  handleClickSortDes = () => {
    const { sortDesFilmList } = this.props;
    sortDesFilmList();
  };

  render() {
    return (
      <div className={styles.sort}>
        <div className={styles.sort_buttons}>
          <button
            onClick={this.handleClickSortAs}
            className={styles.sort_button}
          />
          <button
            onClick={this.handleClickSortDes}
            className={styles.sort_button}
          />
        </div>
      </div>
    );
  }
}

export default Sort;
