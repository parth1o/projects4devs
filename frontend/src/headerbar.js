import {Link, useHistory} from "react-router-dom";
import React from "react";
import {Button} from "@material-ui/core";
import "./headerbar.css";
import useToken from './useToken';

function Headerbar(){
    const history = useHistory();
    const {deleteToken} = useToken();

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
                        <a className="nav-item nav-link" onClick={() => {
                            deleteToken();
                            history.push('/');
                        }}>Log Out</a>
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Headerbar;
