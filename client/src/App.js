import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/todo" component={Dashboard} />
    </Router>
  );
}

export default App;
