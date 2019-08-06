import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../store/duck";

const mapStateToProp = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

class Dashboard extends React.Component {
  exitLogin = () => {
    const { logOut } = this.props;
    logOut();
  };
  render() {
    return (
      <section>
        <p>Главная</p>
        <button onClick={this.exitLogin}>X</button>
      </section>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Dashboard);
