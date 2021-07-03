import './App.css';
import React, {useEffect, useState} from 'react';
import useToken from './useToken';
import {useRouteProtector} from "./useRouteProtector";
import HeaderBar from "./headerbar";

function ProfileDisplay({ dataInput = {} }) {
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
                .then(data => setData(data));
        }
    }, []);

    return (
        <div>
            <HeaderBar/>
            <div className="profileDetail">
                <h1 className="title">{`${data.firstName} ${data.lastName}`}</h1>

                <div className="desc">
                    <h4>About me!</h4>
                    <p>{data.description}</p>
                </div>

                <p>{data.email}</p>
            </div>
        </div>
    );
}

export default ProfileDisplay;
