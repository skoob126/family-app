import React from "react";
import {Link } from "react-router-dom";



function DashNav() {

   


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="row mx-auto ">
                {/* <div className="col-6">
                <a className="navbar-brand" Link to="#">Home</a>
                </div> */}
                <div className="col-12collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" >Dashboard<span className="sr-only"></span></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" >Members</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">Calender</div>
                        </li>
                        <li className="nav-item nav-link">
                           <Link to="/account">Account</Link> 
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DashNav;