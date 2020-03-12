import * as React from "react";
import axios from 'axios';
import {useEffect, useState} from "react";

const Announcement = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [announcement, setAnnouncement] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(false);
                const response = await axios.get('http://localhost:1337/romannouncements', {});
                const announcements: Array<any> = response.data;
                const draftAnnouncement = announcements.filter((item) => {
                    return item.status === 'draft';
                })[0]['content'];
                const publishedAnnouncement = announcements.filter((item) => {
                    return item.status === 'publish';
                })[0]['content'];

                console.dir(draftAnnouncement);
                console.dir(publishedAnnouncement);
                const isDraft = new Boolean(new URL(window.location.href).searchParams.get('isDraft')).valueOf();
                if (isDraft) {
                    setAnnouncement(draftAnnouncement);
                } else {
                    setAnnouncement(publishedAnnouncement);
                }
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
            {/*<div data-testid='loading-text'><span>{isLoading ? 'loading....' : ''}</span></div>*/}
            <div data-testid='username'>{announcement}</div>
        </div>);
};
export default Announcement;