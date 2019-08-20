import React, { Component } from 'react'
import '../blogContent/djcss/login.scss'
import 'antd/dist/antd.css';
import { Input ,Button,Radio} from 'antd';
import {Link} from 'react-router-dom'
import register from './register'
export default class Login extends Component {
    state = {
        size: 'large',
      };
    render() {
        const { size } = this.state;
        return (
            <div className='login'>
                <div className='login-list'>
                    <div><Input size="large" placeholder="请输入姓名" /></div>
                    <div><Input size="large" placeholder="请输入密码" /></div>
                    <p><span>忘记密码？</span><span><Link to='/register'>新用户注册</Link></span></p>
                    <Button type="primary" size={size}>
                        登陆
                    </Button>
                </div>
            </div>
        )
    }
}
