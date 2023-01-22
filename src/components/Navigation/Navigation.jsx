import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavigationLink to='/'>Home</NavigationLink>
                </li>
                <li>
                    <NavigationLink to='/events'>Events</NavigationLink>
                </li>
                <li>
                    <NavigationLink to='/search'>Search</NavigationLink>
                </li>
            </ul>
        </nav>
    )
}