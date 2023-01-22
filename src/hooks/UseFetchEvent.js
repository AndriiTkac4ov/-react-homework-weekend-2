import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEventById } from "../services/api/EventAPI";



export const useFetchEvent = () => {
    const [event, setEvent] = useState(null);
    const { eventId } = useParams();

    console.log(eventId);

    console.log(fetchEventById);

    useEffect(() => {
        fetchEventById(eventId).then(setEvent).catch(console.error);
    }, [eventId]);

    console.log(event);

    return event;
}
