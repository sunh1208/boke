import React, { Component } from 'react'
import "./index.scss"

function name(params) {
    let color = Math.floor(Math.random() * 0xffffff).toString(16);
    console.log(color)
    return "#" + color
}

export default class BlogItem extends Component {
    render() {
        let { item } = this.props
        return (
            <div className="blogItem_item" onClick={() => this.props.history.push('/home/blogParticulars/' + item.blogId)}>
                <div className="bolg_item_img">
                    <img src="; " alt="; " />
                </div>
                <div className="blog_item_contont">
                    <h3>{item.title}</h3>
                    <p>
                        阿西吧是是是嘻嘻嘻啊啊啊啊从啛啛喳喳错行者常至出现在现场直线轴承擦擦擦svdsvdvbwavacsAa是大V啊啊吃撒擦
                    </p>
                    <div className="blog_span_box">
                        <span className="item_img">
                            <img src={item.userIcon} alt="" />
                        </span>
                        {
                            item.sign.map((it, ins) => {
                                return <span style={{ backgroundColor: name() }} key={it.signId}> {it.sign}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}