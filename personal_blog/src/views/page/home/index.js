import React, { Component } from 'react'
import Router from "../../../router/config"
import "./index.css"
export default class Home extends Component {
    render() {
        console.log(this.props.Routes)
        return (
            <div className="index">
                <header className="header">123</header>
                <div className="index_main">
                    {
                        Router(this.props.Routes)
                    }
                </div>
            </div>
        )
    }
}
