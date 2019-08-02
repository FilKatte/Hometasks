import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Nav extends React.Component {
  render() {
    const { links } = this.props;

    const linksItem = links.map((obj, id) => (
      <li key={id}>
        <NavLink
          to={obj.path}
          exact={obj.exact}
          activeClassName="activeClass"
          className="link"
        >
          {obj.title}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <ul>{linksItem}</ul>
        <hr />
      </div>
    );
  }
}

export default Nav;
