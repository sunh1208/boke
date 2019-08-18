import React, { Component } from 'react'
import Editor from './editor'
import './djcss/content.scss'
import 'antd/dist/antd.css';
import { Input } from 'antd';
export default class home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='main'>
                <div className='top'>
                    <div className="top-list">
                        <span>标题：</span>
                        <Input size="large" placeholder="输入内容" />
                    </div>
                    <div className="top-list">
                        <span>标题：</span>
                        <Input size="large" placeholder="用逗号隔开" />
                    </div>
                </div>
                <div className='content'>
                <Editor></Editor>
                </div>
                </div>
            </div>
        )
    }
}
