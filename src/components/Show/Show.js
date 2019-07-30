import React from "react";
import "./Show.css";
import "./../App";
import { getShowInfo } from "./../../api";

class Show extends React.Component {
  state = { data: null };

  componentDidUpdate(prevProps, prevState) {
    const { showId } = this.props;

    if (prevProps.showId !== this.props.showId) {
      getShowInfo(showId).then(data => this.setState({ data }));
    }
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        {data && (
          <div className="serial">
            <div className="icon">
              <img src={data.image.medium} alt="Cover" />
            </div>
            <div className="info">
              <div className="name">{data.name}</div>
              <div>
                <span className="genres">Жанр:</span> {data.genres.join(", ")}
              </div>
              <div
                className="summary"
                dangerouslySetInnerHTML={{ __html: data.summary }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Show;
