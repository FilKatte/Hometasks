import React from "react";
import { connect } from "react-redux";
import { filmsListSelector, loaderFilmsListSelector } from "./store/selectors";
import { getFilmList, sortAsFilmList, sortDesFilmList } from "./store/duck";
import styles from "./Films.module.css";
import SearchSelect from "../../components/SearchSelect";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const mapStateToProps = state => {
  return {
    filmsList: filmsListSelector(state),
    loading: loaderFilmsListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmList: () => dispatch(getFilmList()),
    sortAsFilmList: () => dispatch(sortAsFilmList()),
    sortDesFilmList: () => dispatch(sortDesFilmList())
  };
};

class Films extends React.Component {
  componentDidMount() {
    const { getFilmList, filmsList } = this.props;
    filmsList.length === 0 && getFilmList();
  }

  handleClickSortAs = () => {
    const { sortAsFilmList } = this.props;
    sortAsFilmList();
  };

  handleClickSortDes = () => {
    const { sortDesFilmList } = this.props;
    sortDesFilmList();
  };

  render() {
    const { filmsList, loading } = this.props;

    return (
      <div className={styles.films}>
        <div className={styles.title}>Films</div>
        <div className={styles.options}>
          <div className={styles.films_select}>
            <SearchSelect filmsList={filmsList} />
          </div>
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
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.loader} />
            <p className={styles.text}>Loading</p>
          </div>
        )}
        {filmsList && (
          <CSSTransition
            in={filmsList.length > 0}
            timeout={1000}
            classNames="my-node"
          >
            <ul className={styles.films_list}>
              {filmsList.map(obj => (
                <li key={obj.episode_id} className={styles.films_item}>
                  <input
                    type="checkbox"
                    id={obj.episode_id}
                    className={styles.hide}
                  />
                  <label htmlFor={obj.episode_id}>
                    {obj.title}, episode {obj.episode_id},{" "}
                    {obj.release_date.slice(0, 4)}
                  </label>
                  <p className={styles.films_text}>{obj.opening_crawl}</p>
                </li>
              ))}
            </ul>
          </CSSTransition>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);
