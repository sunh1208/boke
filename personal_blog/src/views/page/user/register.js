import React, { Component } from 'react'
import '../blogContent/djcss/login.scss'
import 'antd/dist/antd.css';
import { Input ,Button,Radio} from 'antd';
export default class Register extends Component {
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
                    <div><Input size="large" placeholder="请确认密码" /></div>
                    <Button type="primary" size={size}>
                        注册
                    </Button>
                </div>
            </div>
        )
    }
}
