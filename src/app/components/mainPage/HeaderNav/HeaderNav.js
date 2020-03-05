import React, { Component } from 'react';
import './HeaderNav.css';

export default class HeaderNav extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    state = {
        current: 'mail',
    };

    render() {
        return (
            <div className='header' />
        );
    }
}
