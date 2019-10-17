import React from "react";
import Wrapper from "./Wrapper";

class People extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        <div>People</div>
        {list && list.length > 0 && (
          <ul>
            {list.map(obj => (
              <li key={obj.name}>{obj.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Wrapper(People);
