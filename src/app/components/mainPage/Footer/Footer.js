import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    //after preare
    render() {
        console.log(this.props, 'child')
        return (
            <div className="footer">
                by bobWen
            </div>
        );
    }
}
