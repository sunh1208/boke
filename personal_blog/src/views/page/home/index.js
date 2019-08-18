import React, { Component } from 'react'
import Router from "../../../router/config"
export default class Home extends Component {
    render() {
        console.log(this.props.Routes)
        return (
            <div>
                <header>123</header>
                <div>
                    {
                        Router(this.props.Routes)
                    }
                </div>
            </div>
        )
    }
}
