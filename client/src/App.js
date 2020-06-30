import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
    <Route exact path={"/"}>
      <Signup />
    </Route>
    <Route exact path="/login">
          <Login />
        </Route>
    <Route exact path="/signup">
          <Signup />
        </Route>
        
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
  
  </Switch>
  </Router>
    
  );
}

export default App;
