import React, { Component } from 'react'
import './blogparticulars.scss'
import Img from '../../../img/timg.jpg'

export class blogparticulars extends Component {
    render() {
        return (
            <div className='particulars-warp'>
                <header className='particulars-header'></header>
                <main className='particulars-main'>
                    <h2>标题</h2>
                    <p className='warp-p'>
                        <img src={Img} alt="" />
                        <span>Array</span>
                        <span>原创</span>
                        <span>113万</span>
                        <span>Javascript</span>
                        <span>Oct 13,2019</span>
                    </p>
                    <div className='particulars-img'>
                        <img src={Img} alt="" />
                    </div>
                    <div className='particulars-content'>
                        内容区
                    </div>
                    <div className='particulars-discuss'>
                        <div className='ap'>
                            <p>
                                <img src={Img} alt=""/>
                            </p>
                            <p>
                                <input type="text"/>
                            </p>
                            <p>
                                评论区
                            </p>
                        </div>
                        <dl className='particulars-matter'>
                            <dd>
                                <img src={Img} alt=""/>
                            </dd>
                            <dt>
                                <p>用户名</p>
                                <p>3</p>
                                <p><span>时间</span> <span>点赞</span> <span>回复</span> </p>
                            </dt>
                        </dl>
                    </div>
                </main>
                <footer className='particulars-footer'>
                    <p> 《 上一篇文章标题 </p>
                    <p> 下一篇文章标题 》 </p>
                </footer>
            </div>
        )
    }
}

export default blogparticulars
