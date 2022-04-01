import { Form, Input, Button, Checkbox } from 'antd';
import React from "react";
import './style.scss';
import {useHistory} from "react-router-dom";

function Login() {
  let history = useHistory();
  function onFinish(values) {
    console.log('Success:', values);
    window.localStorage.setItem('userInfo', JSON.stringify(values))
    history.push('/Home')
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  }

  return (
    <div className='form'>
      <Form
        className="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          className='loginFormItem'
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          className='loginFormItem'
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className='loginFormItem' name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item className='loginFormItem' wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Login
