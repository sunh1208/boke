import React, { Component } from 'react'
import "./blogList.scss"
import BlogItem from "../../../component/BlogItem";
export default class blogList extends Component {
    state = {
        list: [1, 2, 3, 4, 5]
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                <div>
                    {
                        list.map(item => {
                            return <BlogItem item={item} >{{ item }} </BlogItem>
                        })
                    }
                </div>
            </div>
        )
    }
}
