import { useFetchEvent } from "../../hooks/UseFetchEvent";
import { useLocation, useNavigate } from "react-router-dom"; 

export const EventDetails = () => {
    const details = useFetchEvent();
    const navigate = useNavigate();
    
    const location = useLocation();
    console.log(location);

    return (
        <>
            {details &&
                <div>
                    <button type="button" onClick={()=>navigate(location?.state?.from ?? '/')}>Go back</button>
                    <h3>{details.name}</h3>
                    <img src={details.images[0].url} alt={details.name} width="300" />
                    <h4>{details.classifications[0].genre.name}</h4>
                    <h4>{details.classifications[0].subGenre.name}</h4>
                </div>
            }
        </>
    )
}