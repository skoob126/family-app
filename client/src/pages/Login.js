import React from "react";
// import Cards from "../components/Cards";


function Login() {

    return(
      <>
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

          <button type="loginBttn" class="btn btn-primary btn-lg btn-block">
            LOGIN
          </button>
        </form>
      
      </>


    )
}

export default Login;