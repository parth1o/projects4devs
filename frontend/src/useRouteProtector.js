import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import useToken from './useToken';

export function useRouteProtector() {
    const {token} = useToken();
    const history = useHistory();

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, []);
}
