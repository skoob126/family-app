import React from "react";
import { Link } from "react-router-dom";
import "../DashNav/style.css";


function DashNav() {




    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light row">
            <div className="col-5">
                <a className="navbar-brand" href="#">Navbar</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav col-7">
                    
                    <li className="nav-item">
                        <Link className="nav-item" to="/account">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/account">Members</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/account">Calendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/account">Account</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default DashNav;