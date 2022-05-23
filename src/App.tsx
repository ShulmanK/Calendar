import React from 'react';
import { Provider } from 'react-redux';
import {Layout, Menu, Breadcrumb} from 'antd';
import {store} from './store/index';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import 'antd/dist/antd.css';
import './App.css';

const {Content} = Layout;

const App = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Navbar/>
                <Content style={{marginTop: 64, height: "100vh"}}>
                    <AppRouter/>
                </Content>
            </Layout>
        </Provider>
    );
};

export default App;