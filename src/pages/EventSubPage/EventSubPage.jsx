import { Link, useLocation } from 'react-router-dom';
import { useFetchEvent } from '../../hooks/UseFetchEvent';
// import { EventDetails } from '../EventDetailes/EventDetails';

export const EventSubPage = () => {
    const event = useFetchEvent();

    const location = useLocation();
    console.log(location);

    return (
        <> {event &&
                <div>
                    <h3>{event.name}</h3>
                    <img src={event.images[0].url} alt={event.name} width="300" />
                    <Link state={location.state} to="details">More details</Link>
                </div>
            }
        </>
    )
}