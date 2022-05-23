import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {rules} from '../utils/rules';
import {useLocation, useNavigate,} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        navigate('/')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelCol={{span: 8}}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username')]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
                rules={[rules.required('Please input your phone'), rules.phoneFormat('Please input 10 numbers')]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input the password')]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;