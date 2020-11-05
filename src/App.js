import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import Layout from "./module/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "./history";

function App(props) {
  return (
    <div className="App">
      <Layout history={history}></Layout>
    </div>
  );
}

export default App;
