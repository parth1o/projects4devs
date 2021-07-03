import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './headerbar.css';
import Dialog from '@material-ui/core/Dialog';
import CreateProject from "./createproject";


function Headerbar() {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
        window.location.reload();
    }

    return (
        <div>
            <nav className="navbar navbar navbar-default navbar-expand-sm">
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <a>
                            <Link className="nav-item nav-link" to="/profile">
                                Profile
                            </Link>
                        </a>
                        <a>
                            <Link className="nav-item nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </a>
                        <a>
                            <Link
                                className="nav-item nav-link"
                                to="/dashboard"
                                onClick={openModal}
                            >
                                Create Project
                            </Link>
                        </a>
                        <a>
                            <Link className="nav-item nav-link" to="/">
                                Log Out
                            </Link>
                        </a>
                    </div>
                </div>
            </nav>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <CreateProject close={closeModal}/>
            </Dialog>
        </div>
    );
}
export default Headerbar;
