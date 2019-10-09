import React from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const menuList = [
  { id: 1, value: "Films", to: "/dashboard/films" },
  { id: 2, value: "People", to: "/dashboard/people" },
  { id: 3, value: "Planets", to: "/dashboard/planets" },
  { id: 4, value: "Species", to: "/dashboard/species" },
  { id: 5, value: "Starships", to: "/dashboard/starships" },
  { id: 6, value: "Vehicles", to: "/dashboard/vehicles" }
];

class Menu extends React.Component {
  render() {
    console.log("Menu");
    return (
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {menuList.map(obj => (
            <li className={styles.item} key={obj.id}>
              <NavLink
                to={obj.to}
                className={styles.link}
                activeClassName={styles.link__active}
              >
                {obj.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Menu;
