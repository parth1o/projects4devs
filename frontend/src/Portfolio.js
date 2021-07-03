import './App.css';
import {useEffect, useState} from 'react';
import useToken from './useToken';

function ProfileDisplay({ dataInput = {} }) {
    const [data, setData] = useState(dataInput);
    const {token} = useToken();

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
        <div className="profileDetail">
            <h1 className="title">{`${data.firstName} ${data.lastName}`}</h1>

            <div className="desc">
                <h4>About me!</h4>
                <p>{data.description}</p>
            </div>

            <p>{data.email}</p>
        </div>
    );
}

export default ProfileDisplay;
