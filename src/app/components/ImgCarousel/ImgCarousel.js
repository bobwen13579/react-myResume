import React, { Component } from 'react';
import { Carousel } from 'antd';
import './ImgCarousel.css';

export default class ImgCarousel extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    //after preare
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        );
    }
}
