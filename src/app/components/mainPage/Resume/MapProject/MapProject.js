import React, { Component } from 'react';
import './MapProject.css';
const respsose = [
    '按设计稿实现交互和页面',
    '与产品经理进行可行性分析',
    '与后端对接接口，商讨前后端数据结构',
    '项目小组代码审查，组件切分，任务的协调分配',
    '维护公司的React组件库'
];

const skill = [
    'React','Rdeux', 'saga' ,'immutable.js', 'three.js' ,'webpack', 'canvans'
];

export default class MapProject extends Component{
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
                        {respsose.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="card">
                    <p>技术栈</p>
                    <ul>
                        {skill.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
