import React, { Component } from 'react';
import { Collapse } from 'antd';

import {connect} from "react-redux";
import { getChooseAuthor } from "../../../reudx/selectors";


const { Panel } = Collapse;

class HeaderAuthor extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Collapse defaultActiveKey={[]} >
                <Panel showArrow={false} header={this.props.name} key="1">
                    <p>{this.props.describe}</p>
                </Panel>
            </Collapse>
        );
    }
}

export default connect(
    getChooseAuthor,
    {}
)(HeaderAuthor)
