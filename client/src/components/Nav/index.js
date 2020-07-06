import React from "react";

function Nav() {
  return (
  
<nav class="navbar sticky-top navbar-light bg-primary">
  <a class="navbar-brand" href="#"style={{fontFamily: "cursive"}} >InnerCircle</a>
  <a className="nav-link btn btn-info my-2 my-sm-0" href="#">Dashboard</a>
      <a className="nav-link btn btn-info my-2 my-sm-0" href="#">Members</a>
      <a className="nav-link btn btn-info my-2 my-sm-0" href="#">Calendar</a>
      <a className="nav-link btn btn-info my-2 my-sm-0" href="#">Messages</a>
      <a className="nav-link btn btn-info my-2 my-sm-0" href="#">Profile</a>
</nav>

  );
}

export default Nav;
