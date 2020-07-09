import React, { Component } from 'react';
import "./Header.css";

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            "appName": "PideTron"
        }
    } 
    render() {
        return (
            <header>
                <h1>{this.state.appName}</h1>
            </header>
        )
    }
}

export default Header;
