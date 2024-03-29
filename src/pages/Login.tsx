import React, {FC} from 'react';
import LoginForm from "../components/LoginForm";
import {Card, Layout, Row} from "antd";

const Login: React.FunctionComponent = () => {
    return (
        <Layout>
            <Row justify={'center'} align={'middle'} className={'h100'}>
                <Card>
                    <LoginForm/>
                </Card>
            </Row>

        </Layout>
    );
};

export default Login;