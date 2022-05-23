import React from 'react';
import {Layout, Menu} from "antd";

const {Header} = Layout;

const Navbar = () => {
    const isAuth = false
    const login = () => {
        console.log('login')
    }
    const logout = () => {
        console.log('logout')
    }

    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%', height: '64px'}}>
            <Menu mode="horizontal" theme="dark" style={{'justifyContent': 'end'}}>
                <Menu.Item key={'link'}><a href="https://github.com/ShulmanK">ShulmanK</a></Menu.Item>
                {isAuth ? <Menu.Item onClick={logout} key={'action'}>Logout</Menu.Item> : <Menu.Item onClick={login} key={'action'}>Login</Menu.Item>}
            </Menu>
        </Header>
    );
};

export default Navbar;