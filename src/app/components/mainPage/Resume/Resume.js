import React, { Component } from 'react';
import { Tabs } from 'antd';


import './Resume.css'
import MapProject from  './MapProject/MapProject';
import PoemProject from  './PoemProject/PoemProject';

const { TabPane } = Tabs;

const project = [
    '地图编辑器',
    '唐诗查询网站',
    '个人博客服务器',
    '分词器',
];

export default class Resume extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    state = {
        current: 'mail',
    };

    render() {
        return (
            <div className = 'contain'>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab={project[0]} key='1'>
                        <MapProject />
                    </TabPane>
                    <TabPane tab={project[0]} key='2'>
                        <PoemProject />
                    </TabPane>
                </Tabs>
            </div>

        );
    }
}
