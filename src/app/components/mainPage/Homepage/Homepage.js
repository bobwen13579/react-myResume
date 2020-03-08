import React, { Component } from 'react';

import { Button } from 'antd';
import './Homepage.css';
import Footer from '../Footer/Footer'
import HeaderNav from "../HeaderNav/HeaderNav";
import Resume from "../Resume/Resume";

import { connect } from 'react-redux'
import { addCount }  from '../../../reudx/actions/poems';
import { getAuthorList} from '../../../reudx/selectors';

class Homepage extends Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
    }

    add = () => {
        console.log(this.props)
        this.props.addCount(this.props.count + 1);

        // const a = this.props.poems.count + 1;
        // rootStore.dispatch({
        //     type: ADD_COUNT,
        //     payload: a
        // });
    };

    render() {
        console.log(this.props.count);
        return (
            <div className='mainDiv'>
                <HeaderNav/>
                <Resume {...this.props} />
                <Button onClick={this.add}>{this.props.count}</Button>
                <Footer />
            </div>
        );
    }
}


export default connect(
    getAuthorList,
    { addCount }
)(Homepage)
