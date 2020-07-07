import React, { useState } from 'react';
import "../Login/style.css";
import {Link} from "react-router-dom"
// import Cards from "../components/Cards";


function Login() {

  const [user, setUser] = useState({username : "", password: ""});


  const onChange = e => {
    e.preventDefault();
   setUser({...user,[e.target.name] : e.target.value})
   console.log(user)
  };

  const onSubmit = e => {
    e.preventDefault();

  };

    return(
      
      <div class="card ">
      <div class="card-body">
        <h5 class="card-title">Login in to InnerCircle</h5>
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <label for="username">Username</label>
            <input
            name="username"
              type="usernameInput"
              onChange={onChange}
              class="form-control"
              id="username"
              aria-describedby="usernameInput"
            />
          </div>

          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password" 
             name="username"
             onChange={onChange}
            class="form-control" 
            id="passwordInput" />
            <a href="#" class="forgetPass">
            
              Forgot password?

           </a>

          </div>

          <Link to="/dashboard"><button type="submit" class="btn btn-primary btn-lg btn-block" >
          LOGIN
          </button></Link>
        </form>


    </div>
    </div>


    )
}

export default Login;