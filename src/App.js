import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import About from "./About";
import Home from "./Home/Home";
import Topics from "./Topics/Topics";

const links = [
  { path: "/", title: "Home", exact: true },
  { path: "/about", title: "About", exact: false },
  { path: "/topics", title: "Topics", exact: false }
];

const App = () => (
  <div>
    <Nav links={links} />

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
);

export default App;
