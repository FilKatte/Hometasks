import React from "react";
import styles from "./Menu.module.css";
import networks from "../assets/networks.png";
import { NavLink } from "react-router-dom";

const monthsList = [
  { id: 1, name: "Январь" },
  { id: 2, name: " Февраль" },
  { id: 3, name: "Март" },
  { id: 4, name: "Апрель" },
  { id: 5, name: "Май" },
  { id: 6, name: "Июнь" },
  { id: 7, name: "Июль" },
  { id: 8, name: "Август" },
  { id: 9, name: "Сентябрь" },
  { id: 10, name: "Октябрь" },
  { id: 11, name: "Ноябрь" },
  { id: 12, name: "Декабрь" }
];
const years = [
  { id: 1, name: "2019", months: monthsList },
  { id: 2, name: " 2018", months: monthsList },
  { id: 3, name: "2017", months: monthsList }
];

const electList = [
  { id: 1, text: "Все новости", to: "/dashboard/allNews" },
  { id: 2, text: "Избранное", to: "/dashboard/elect" },
  { id: 3, text: "Важное", to: "/dashboard/important" }
];

class Menu extends React.Component {
  state = {
    yearsName: "",
    isOpen: false
  };

  handleClick = name => {
    if (name === this.state.yearsName) {
      this.setState({ isOpen: !this.state.isOpen });
    } else {
      this.setState({ yearsName: name, isOpen: true });
    }
  };

  monthsClick = e => {
    e.stopPropagation();
  };

  render() {
    const { yearsName, isOpen } = this.state;

    return (
      <nav className={styles.nav}>
        <div className={styles.nav__content}>
          <div className={styles.elect}>
            <ul className={styles.elect__list}>
              {electList.map(electObj => (
                <li className={styles.elect__item} key={electObj.id}>
                  <NavLink to={electObj.to} className={styles.elect__link}>
                    {electObj.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.years}>
            <ul className={styles.years__list}>
              {years.map(yearsObj => (
                <li
                  key={yearsObj.id}
                  className={styles.years__item}
                  onClick={() => this.handleClick(yearsObj.name)}
                >
                  <p className={styles.years__text}>{yearsObj.name}</p>
                  {yearsName === yearsObj.name && isOpen && (
                    <ul
                      className={styles.months__list}
                      onClick={e => this.monthsClick(e)}
                    >
                      {yearsObj.months.map(monthsObj => (
                        <li key={monthsObj.id} className={styles.months__item}>
                          {monthsObj.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.wombat}>
            <a className={styles.wombat__link} href="#">
              Wombat
            </a>
          </div>

          <div className={styles.info}>
            <p className={styles.info__text}>
              E-mail для отправки идей, инициатив, критики и пожеланий{" "}
              <a className={styles.info__link} href="whynot@smedialink.com">
                whynot@smedialink.com
              </a>
            </p>
            <p className={styles.info__text}>С уважением, S Media Link.</p>

            <div className={styles.networks}>
              <img
                className={styles.networks__icon}
                src={networks}
                alt="networks"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
