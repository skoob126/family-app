import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
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
  
  </Switch>
  </Router>
    
  );
}

export default App;
