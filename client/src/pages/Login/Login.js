import React from "react";
import "../Login/style.css";
import {Link, useParams} from "react-router-dom"
// import Cards from "../components/Cards";


function Login() {

    return(
      
      <div class="card ">
      <div class="card-body">
        <h5 class="card-title">Login in to InnerCircle</h5>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="usernameInput"
              class="form-control"
              id="username"
              aria-describedby="usernameInput"
            />
          </div>

          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" />
            <a href="#" class="forgetPass">
            
              Forgot password?
           </a>
          </div>

          <Link to="/dashboard"><button type="loginBttn" class="btn btn-primary btn-lg btn-block" >
          LOGIN
          </button></Link>
        </form>
    
    </div>
    </div>


    )
}

export default Login;