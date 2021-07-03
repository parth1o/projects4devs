import {Link, useHistory} from "react-router-dom";
import React, {useState} from "react";
import "./headerbar.css";
import useToken from './useToken';
import Dialog from '@material-ui/core/Dialog';
import CreateProject from './createproject';

function Headerbar(){
    const history = useHistory();
    const {deleteToken} = useToken();
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
        window.location.reload();
    }
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
                        <Link className="nav-item nav-link" to='/dashboard' onClick={openModal}>Create Project</Link>
                    </a>
                    <a>
                        <a className="nav-item nav-link" onClick={() => {
                            deleteToken();
                            history.push('/');
                        }}>Log Out</a>
                    </a>
                </div>
            </div>
            <Dialog open={open} onClose={closeModal}>
                <CreateProject close={closeModal}/>
            </Dialog>
        </nav>
    );
}
export default Headerbar;
