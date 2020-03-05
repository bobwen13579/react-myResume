import React, { Component } from 'react';
import { List, Input } from 'antd';
import { connect } from 'react-redux'

import './Homepage.css'
import ContentPoems from '../ContentPoems/ContentPoems'
import HeaderAuthor from '../HeaderAuthor/HeaderAuthor'
import { fetchAuthorList, fetchAuthorLiked, chooseAuthors, fetchPoemsByAuthor }  from '../../../reudx/actions/poems';
import { getAuthorList }  from '../../../reudx/selectors';

const { Search } = Input;

class Homepage extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAuthorList();
    }

    search = (value) => {
        this.props.fetchAuthorLiked(value);
    };

    authorClick = (e, item) =>{
        this.props.chooseAuthors(item.name, item.desc);
        this.props.fetchPoemsByAuthor(item.name);
    };

    render() {
        console.log(this.props);
        return (
            <div className='main'>
                <div className='authorList'>
                    <List
                        size="small"
                        header={
                            <Search
                                placeholder="input name"
                                enterButton="Search"
                                size="small"
                                onSearch={value => this.search(value)}
                            />
                        }
                        bordered
                        dataSource={this.props.authorList}
                        renderItem={item => (
                            <List.Item className='authorCard' onClick={ (e) => this.authorClick(e, item)}>
                                <div>
                                    {item.name}
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
                <div className="content">
                    <HeaderAuthor/>
                    <ContentPoems {...this.props}/>
                </div>
            </div>

        );
    }
}


export default connect(
    getAuthorList,
    { fetchAuthorList, fetchAuthorLiked, chooseAuthors, fetchPoemsByAuthor }
)(Homepage)
