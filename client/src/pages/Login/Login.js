import React, { useState, useContext } from 'react';
import Message from "../../components/Message/Message";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
// import { Link } from "react-router-dom"
import "../Login/style.css";


const Login = props => {

  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    // console.log(data);
    e.preventDefault();
    AuthService.login(user).then(data => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        ///Take to todos page
        props.history.push('/todo');
      }
      else
        setMessage(message);
    });
  }

  return (

 

    <div className="container col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <form className="shadow-lg card " onSubmit={onSubmit}>
      <div className="card-body">
        <h3 className="card-title">Welcome back!</h3>
        <h6>Please login to your account.</h6>
        <label htmlFor="username" className="user card-text sr-only">Username: </label>
        <input type="text" 
               name="username" 
               onChange={onChange} 
               className="form-control" 
               placeholder="Enter Username"/>
        <label htmlFor="password" className="pass card-text sr-only">Password: </label>
        <input type="password" 
               name="password" 
               onChange={onChange} 
               className="form-control" 
               placeholder="Enter Password"/>
        <button className="btn btn-lg btn-primary btn-block" 
                type="submit">LOGIN </button>

        </div>
    </form>
    {message ? <Message message={message}/> : null}
</div>


  )
}

export default Login;