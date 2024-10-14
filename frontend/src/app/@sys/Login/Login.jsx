import React from 'react'
import './Login.css';
import {Form, Button, Select, Checkbox, DatePicker, Input} from 'antd';

function Login() {
  return (
    <>
    <div className='login'>
        <img src='' alt=''></img>
        <div className='login-header'>
            <h1>Kshitiz Choudhary</h1>
        </div>
        <div className='login-hyperlink'>
            <h4>Already a member ? Login</h4>
        </div>
        <div className='login-info'>
            
            <Form>
                <Form.Item name = "fullName" label= "Full Name">
                    <Input placeholder='Type your name'/>
                </Form.Item>

                <Form.Item name = "email" label= "Email">
                    <Input placeholder='Type your Email'/>
                </Form.Item>

                <Form.Item name = "password" label= "Password">
                    <Input.Password placeholder='Type your password'/>
                </Form.Item>

                <Form.Item name = "confirmPassword" label= "Confirm Password">
                    <Input.Password placeholder='Confirm Passowrd'/>
                </Form.Item>

                <Form.Item name = "gender" label= "Gender">
                    <Select placeholder="Select Your Gender"/>
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                </Form.Item>

                <Form.Item name = "dob" label= "Date of Birth">
                    <DatePicker picker="date" placeholder='Select your Date of birth'/>
                </Form.Item>

                <Button type="primary">Primary Button</Button>
            </Form>
        <div className='login-submit-btn'>
            <button>SIGN UP</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login
