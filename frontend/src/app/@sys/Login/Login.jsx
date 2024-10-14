import React from "react";
import "./Login.css";
import { Form, Button, Select, DatePicker, Input } from "antd";

function Login() {
  return (
    <>
      <div className="login">
        <div className="login-header">
          <h1>Create a Account</h1>
        </div>
        <div className="login-hyperlink">
          <h4>Already a member ? Login</h4>
        </div>
        <div className="login-info">
          <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout={"vertical"}
          >
            <Form.Item name="fullName" label="Full Name">
              <Input placeholder="Type your name" style={{ width: 300 }}/>
            </Form.Item>

            <Form.Item name="email" label="Email">
              <Input placeholder="Type your Email" style={{ width: 300 }}/>
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input.Password placeholder="Type your password" style={{ width: 300 }}/>
            </Form.Item>

            <Form.Item name="confirmPassword" label="Confirm Password">
              <Input.Password placeholder="Confirm Passowrd" style={{ width: 300 }}/>
            </Form.Item>

            <Form.Item name="gender" label="Gender">
              <Select placeholder="Select Your Gender" style={{ width: 300 }}/>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Form.Item>

            <Form.Item name="dob" label="Date of Birth">
              <DatePicker
                picker="date"
                placeholder="Select your Date of birth"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
