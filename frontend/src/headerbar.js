import {Link} from "react-router-dom";
import React from "react";
import {Button} from "@material-ui/core";
import "./headerbar.css";

function headerbar(){
    return (
        <nav className="navbar navbar navbar-default navbar-expand-sm">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a>
                        <Link className="nav-item nav-link" to='/profile'>Profile</Link>
                    </a>
                    <a>
                        <Link className="nav-item nav-link" to='/dashboard'>Dashboard</Link>
                    </a>
                    <a>
                        <Link className="nav-item nav-link" to='/dashboard'>Create Project</Link>
                    </a>
                    <a>
                        <Link className="nav-item nav-link" to='/'>Log Out</Link>
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default headerbar;