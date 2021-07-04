import './App.css';
import React, {useEffect, useState} from 'react';
import useToken from './useToken';
import {useRouteProtector} from "./useRouteProtector";
import HeaderBar from "./headerbar";

function ProfileDisplay({ dataInput = {} }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(dataInput);
    const {token} = useToken();

    useRouteProtector();

    useEffect(() => {
        if (!data.name) {
            fetch('/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => res.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div>
                <HeaderBar/>
            </div>
        );
    }

    return (
        <div>
            <HeaderBar/>
            <div className="profileDetail">
                <p className="ghuu"><strong className="othfont">Name: </strong>{`${data.firstName} ${data.lastName}`}</p>
                <p className="ghuu"><strong className="othfont">Your Email: </strong>{data.email}</p>
                <div className="ghuu">
                    <strong><p className="othfont">Your Experiences:</p></strong>
                    <p className="ghu">{data.description}</p>
                </div>

                
            </div>
        </div>
    );
}

export default ProfileDisplay;
