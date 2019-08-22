import React from "react";
import { connect } from "react-redux";
import { addData, changeFlagUpdatedData } from "./store/duck";
import {
  updatedDataSelector,
  nameSelector,
  numberSelector,
  dateSelector,
  cvvSelector
} from "./store/selectors";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
import ProfileForm from "./ProfileForm";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    updatedData: updatedDataSelector(state),
    name: nameSelector(state),
    number: numberSelector(state),
    date: dateSelector(state),
    cvv: cvvSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addData: data => dispatch(addData(data)),
    changeFlagUpdatedData: () => dispatch(changeFlagUpdatedData())
  };
};

class Profile extends React.Component {
  render() {
    const {
      addData,
      changeFlagUpdatedData,
      updatedData,
      name,
      number,
      date,
      cvv
    } = this.props;

    return (
      <div className={styles.profile}>
        <div className={styles.profile__content}>
          <p className={styles.profile__title}>Профиль</p>
          {updatedData ? (
            <div>
              <p className={styles.profile__text}>
                Платёжные данные обновлены. Теперь можете заказывать такси.
              </p>
              <NavLink to="/dashboard/map">
                <Button
                  onClick={changeFlagUpdatedData}
                  variant="outlined"
                  color="primary"
                >
                  Перейти на карту
                </Button>
              </NavLink>
            </div>
          ) : (
            <ProfileForm
              addData={addData}
              name={name}
              number={number}
              date={date}
              cvv={cvv}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

Profile.propTypes = {
  addData: PropTypes.func,
  changeFlagUpdatedData: PropTypes.func,
  updatedData: PropTypes.bool,
  name: PropTypes.string,
  number: PropTypes.string,
  date: PropTypes.string,
  cvv: PropTypes.string
};
