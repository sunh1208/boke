import React, { Component } from 'react'
import "./blogList.scss"
import { getBlogListInfo } from "../../../server/index"
import BlogItem from "../../../component/BlogItem";
export default class blogList extends Component {
    state = {
        list: null
    }
    componentDidMount() {
        let that = this;
        async function a() {
            let data = await getBlogListInfo()
            console.log(data)
            that.setState({
                list: data
            })
        }
        a()
        console.log(getBlogListInfo)
        // this.setState({
        //     list: data
        // })
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                <div>
                    {
                        list && list.map(item => {
                            return <BlogItem {...this.props} item={item} key={item.blogId} > </BlogItem>
                        })
                    }
                </div>
            </div>
        )
    }
}
