import React from "react";
import { Link, Route } from "react-router-dom";

const Home = () => <p>Home page</p>;
const About = () => <p>About page</p>;
const Topics = () => <p>Topics page</p>;

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
);

export default App;
