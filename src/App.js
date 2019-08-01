import React from "react";
import withWindowWidth from "./HOC/withWindowWidth";
import ShowWidth from "./WidthComponent/ShowWidth";

const App = withWindowWidth(ShowWidth);

export default App;
