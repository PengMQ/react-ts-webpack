import * as React from "react";
import axios from 'axios';
import {useEffect, useState} from "react";

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/pengmq/mock-server/profile', {});
                console.dir(response);
                setIsLoading(false);
                setUsername(response.data.data.username);
            } catch (error) {
                setIsLoading(false);
                setErrorMessage(error);
            }
        }

        fetchData();


    }, []);


    return (
        <div>
            <div data-testid='error-message'>{errorMessage}</div>
            <div data-testid='loading-text'><span>{isLoading ? 'loading....' : ''}</span></div>
            <div data-testid='username'>{username}</div>
        </div>);
};
export default Profile;