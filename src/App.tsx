import React, { Component } from "react";

// Assets & Style
import "./App.scss";
import "./customBootstrap.scss";
import SmartForm from "./components/smart-form/SmartForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SmartForm />
      </div>
    );
  }
}

export default App;
