import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';
import './Homepage.css';
import Footer from '../Footer/Footer'
import ImgCarousel from '../ImgCarousel/ImgCarousel'
import HeaderNav from "../HeaderNav/HeaderNav";

import { ADD_COUNT }  from '../../reudx/constants/action-types';
import rootStore from "../../reudx/store";

export default class Homepage extends Component{

    constructor(props) {
        super(props)
    }

    static propTypes = {
        poems: PropTypes.object.isRequired
    };

    componentDidMount() {
    }

    add = () => {
    console.log(this.props);
        rootStore.dispatch({
            type: ADD_COUNT,
            payload: this.props.poems.count ++
        });
    };

    //after preare
    render() {
        const {  count } = this.props.poems;
        console.log(count);
        return (
            <div>
                <HeaderNav/>
                <Button onClick={this.add}>{count || 0}</Button>
                <ImgCarousel />
                <Footer />
            </div>

        );
    }
}
