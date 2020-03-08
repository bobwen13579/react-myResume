import React, { Component } from 'react';
import './PoemProject.css';
import {Button} from "antd";
const respsose = [
    '利⽤爬⾍apify爬取古诗数据，存储到本地的mongodb⾥',
    '集成了爬⾍任务⼊⼝、爬⾍任务的错误捕获和重试、爬⾍任务队列/列表、爬⾍内部状态监控以及代理池等',
    '后端集成express.js框架，提供完善的路由控制和Restful接⼝',
    '中间件集成单元测试和异常处理项⽬部署于阿⾥云服务器',
    '前端部分展⽰利⽤react全家桶',
];

const skill = [
    'node', 'mongodb', 'docker', 'koa.js', 'apify.js爬⾍', '单元测试', 'graphql', 'pm部署'
];

export default class PoemProject extends Component{
    constructor(props) {
        super(props)
    }
    state = {
        current: 'mail',
    };

    render() {
        return (
            <div className='contentDiv'>
                <div className="card">
                    <p>职责</p>
                    <ul>
                        {respsose.map((item,index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="card">
                    <p>技术栈</p>
                    <ul>
                        {skill.map((item,index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="card">
                    <Button>junmp</Button>
                </div>
            </div>
        );
    }
}
