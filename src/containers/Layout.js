import React from 'react';
import Menu from '../components/Menu';

const Layout = (props) => {

    return (
        <div>
            <Menu user = {props.user} setUser={props.setUser} />
            {props.children}
        </div>
    )
}

export default Layout;