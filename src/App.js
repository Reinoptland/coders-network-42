import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CreateBlogPost from "./pages/CreateBlogPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Read stuff</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/newpost">Post something!</Link>
        <Switch>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/newpost" component={CreateBlogPost} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
