import React from "react";
import { connect } from "react-redux";
import { filmsListSelector, loaderFilmsListSelector } from "./store/selectors";
import { getFilmList } from "./store/duck";
import styles from "./Films.module.css";

const mapStateToProps = state => {
  return {
    filmsList: filmsListSelector(state),
    loading: loaderFilmsListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmList: () => dispatch(getFilmList())
  };
};

class Films extends React.Component {
  componentDidMount() {
    const { getFilmList } = this.props;
    getFilmList();
  }

  render() {
    const { filmsList, loading } = this.props;

    const films = filmsList.results;

    return loading ? (
      <div className={styles.loading}>
        <div className={styles.loader} />
        <p className={styles.text}>Loading</p>
      </div>
    ) : (
      <div className={styles.films}>
        <div className={styles.title}>Films</div>
        {films && (
          <ul>
            {films.map(obj => (
              <li key={obj.episode_id}>
                {obj.title}, episode {obj.episode_id}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);
