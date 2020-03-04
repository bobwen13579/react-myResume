import React, { Component } from 'react';
import { List, Input } from 'antd';
import { connect } from 'react-redux'

import './Homepage.css'
import { fetchPoems }  from '../../../reudx/actions/poems';
import { getPoems }  from '../../../reudx/selectors';

const { Search } = Input;

class Homepage extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPoems();
    }

    render() {
        let showArr = [];
        if(this.props.poems.length > 10) {
            showArr = this.props.poems.slice(0,10);
        }
        console.log(showArr);

        return (
            <div className='main'>
                <List
                    size="small"
                    header={
                        <Search
                            placeholder="input name"
                            enterButton="Search"
                            size="small"
                            onSearch={value => console.log(value)}
                        />
                    }
                    footer={<div>back to the main</div>}
                    bordered
                    dataSource={showArr}
                    renderItem={item => (
                        <List.Item>
                            <div>{item.name}</div>
                        </List.Item>
                    )}
                />
            </div>

        );
    }
}


export default connect(
    getPoems,
    { fetchPoems }
)(Homepage)
