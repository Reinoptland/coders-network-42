import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/signup">Signup</Link>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
