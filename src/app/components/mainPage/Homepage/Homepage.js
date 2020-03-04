import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';
import './Homepage.css';
import Footer from '../Footer/Footer'
import ImgCarousel from '../ImgCarousel/ImgCarousel'
import HeaderNav from "../HeaderNav/HeaderNav";


import { connect } from 'react-redux'
import { addCount, fetchPoems }  from '../../../reudx/actions/poems';
import { getCount }  from '../../../reudx/selectors';

class Homepage extends Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
    }

    add = () => {
        this.props.addCount(this.props.count + 1);

        // const a = this.props.poems.count + 1;
        // rootStore.dispatch({
        //     type: ADD_COUNT,
        //     payload: a
        // });
    };

    fetchPoems = () => {
        this.props.fetchPoems();
    }

    render() {
        console.log(this.props.count);
        return (
            <div>
                <HeaderNav/>
                <Button onClick={this.add}>{this.props.count}</Button>
                <Button onClick={this.fetchPoems}>poems</Button>
                <ImgCarousel />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return state.poems;
};

export default connect(
    getCount,
    { addCount, fetchPoems }
)(Homepage)
