import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { fetchEvents } from "../../services/api/EventAPI";

export const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchEvents().then(setEvents).catch(console.error).finally(() => { setIsLoading(false) });
    }, []);

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {events.length > 0 && <ul>{events.map(({ id, name }) => {
                return <li key={id}><Link to={id}>{name}</Link></li>
            })}</ul>}
        </>
    )
}