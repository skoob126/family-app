import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  let history = useHistory();

  const onClickLogoutHandler = () => {
      console.log("test");
    AuthService.logout().then((data) => {
        console.log(data);
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated();
        history.push("/");
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <Link to="/">
                <li className="nav-item nav-link">Home</li>
              </Link>
              <Link to="/login">
                <li className="nav-item nav-link">Login</li>
              </Link>
              <Link to="/signup">
                <li className="nav-item nav-link">Signup</li>
              </Link>
            </ul>
          </div>
        </nav>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/todo">
          <li className="nav-item nav-link">Todo</li>
        </Link>
        
        {console.log(user.username)}
        <button
          type="button"
          className="btn btn-link nav-item nav link"
          onClick={onClickLogoutHandler}
        
        >
          Logout
        </button>
      </>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <div className="navbar-brand">InnerCircle</div>
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
