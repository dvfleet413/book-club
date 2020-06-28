import React from 'react';
import Menu from '../components/Menu';

const Layout = (props) => {

    return (
        <div>
            <Menu />
            {props.children}
        </div>
    )
}

export default Layout;