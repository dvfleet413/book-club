import React from 'react';
import UnauthenticatedNavbar from '../components/UnauthenticatedNavbar';

const Layout = (props) => {
    return (
        <div>
            <UnauthenticatedNavbar />
            {props.children}
        </div>
    )
}

export default Layout;