import React from "react";
import styles from "./Dashboard.module.css";
import Header from "./components/Header";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
      </div>
    );
  }
}

export default Dashboard;
