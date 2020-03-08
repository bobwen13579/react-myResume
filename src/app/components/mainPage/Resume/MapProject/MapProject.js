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

const work = [
    '封装canvas为React组件，维护公司⾃⼰的React组件库','在UI线程和计算线程寻找平衡，在⾼效渲染的同时，保证⽤⼾操作的良好体验',
    '对接⾼德地图接口，实现室内和和室外地图的⽐例统⼀','通过计算机图像学和平⾯渲染3D地集成webpack打包'
]

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
                <div className="show">
                    <p>成果</p>
                    <ul>
                        {work.map((item,index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
