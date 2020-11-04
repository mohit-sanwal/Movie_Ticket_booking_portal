import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import Layout from "./module/Layout/Layout";

function App(props) {
  return (
    <div className="App">
      <Layout history={props.history}></Layout>
    </div>
  );
}

export default App;
