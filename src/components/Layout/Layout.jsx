import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
    const location = useLocation();

    console.log(location);

    return(
        <>
            <header>
                {!location.pathname.includes('/details') && <Navigation />}
            </header >
            <main>
                <Outlet />
            </main>
        </>
    )
}