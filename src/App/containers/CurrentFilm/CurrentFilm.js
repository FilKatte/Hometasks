import React from "react";
import { connect } from "react-redux";
import { filmSelector } from "./store/selectors";
import { selectFilm } from "./store/duck";
import "./CurrentFilm.css";

const films = [{ name: "Film 1" }, { name: "Film 2" }, { name: "Film 3" }];

const mapStateToProps = state => {
  return {
    film: filmSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectFilm: name => dispatch(selectFilm(name))
  };
};

class CurrentFilm extends React.Component {
  setFilmHandler = film => {
    const { selectFilm } = this.props;
    selectFilm !== film && selectFilm(film);
  };
  render() {
    const { film } = this.props;
    return (
      <div>
        {films.map((obj, ind) => (
          <div
            key={ind}
            onClick={() => this.setFilmHandler(obj.name)}
            className="pointer"
          >
            {obj.name}
          </div>
        ))}

        <p>Вы выбрали: {film.selectedFilm}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentFilm);
