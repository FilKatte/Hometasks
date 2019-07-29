import React from "react";
import "./Show.css";
import "./../App";
import { getShowInfo } from "./../../api";

class Show extends React.Component {
  state = { data: null };
  componentDidUpdate(prevProps, prevState) {
    const { showId } = this.props;
    console.log("PREV ", prevProps.showId, "CURENT ", this.props.showId);
    if (prevProps.showId !== this.props.showId) {
      getShowInfo(showId).then(data => this.setState({ data }));
    }
  }
  render() {
    const { showId } = this.props;
    return <div>{showId}</div>;
  }
}

export default Show;
