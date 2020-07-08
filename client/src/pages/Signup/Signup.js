import React, { useState,useRef,useEffect } from 'react';
import AuthService from '../../Services/AuthService';
import Message from "../../components/Message/Message";

// import { Link } from "react-router-dom"
import "../Login/style.css";


const Signup = props => {

  const [user, setUser] = useState({ username: "",email: "", password: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);
 


useEffect(()=>{
    return()=>{
      clearTimeout(timerID);
    }
},[]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

const resetForm = ()=>{
    setUser({username : "", password : "",email : ""});
}

const onSubmit = e =>{
  e.preventDefault();
  AuthService.signup(user).then(data=>{
      const { message } = data;
      setMessage(message);
      resetForm();
      if(!message.msgError){
          timerID = setTimeout(()=>{
              props.history.push('/login');
          },2000)
      }
  });
}


  return (

    <div>
      <form className="shadow-lg card" onSubmit={onSubmit}>
      <div className="card-body">
        <h3 className="card-title">Welcome!</h3>
        <h6>Please fill out with your information.</h6>
        <label htmlFor="username" className="user sr-only">Username: </label>
        <input type="text"
          name="username"
          value={user.username}
          onChange={onChange}
          className="form-control"
          placeholder="Enter Username" />

        <label htmlFor="email" className="email sr-only">Email: </label>
        <input type="text"
          name="email"
          value={user.email}
          onChange={onChange}
          className="form-control"
          placeholder="Enter email" />

        <label htmlFor="password" className="pass sr-only">Password: </label>
        <input type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password" />
        <button className="btn btn-lg btn-primary btn-block"
          type="submit">Sign up</button>
          </div>
      </form>
      {message ? <Message message={message} /> : null}
    </div>


  )
}

export default Signup;