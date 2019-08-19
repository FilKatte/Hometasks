import React from "react";
import { connect } from "react-redux";
import { addData } from "./store/duck";
import {
  nameSelector,
  numberSelector,
  dateSelector,
  cvvSelector
} from "./store/selectors";
import styles from "./Profile.module.css";
import ProfileForm from "./ProfileForm";

const mapStateToProp = state => {
  return {
    name: nameSelector(state),
    number: numberSelector(state),
    date: dateSelector(state),
    cvv: cvvSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addData: data => dispatch(addData(data))
  };
};

class Profile extends React.Component {
  render() {
    const { addData } = this.props;

    return (
      <div className={styles.profile}>
        <ProfileForm addData={addData} />
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Profile);
