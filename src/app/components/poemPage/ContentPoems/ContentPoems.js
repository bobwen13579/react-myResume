import React, { Component } from 'react';
import { Card } from 'antd';

export default class Contentpoems extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.poemList);
        const list = this.props.poemList;
        return (
            <div className='site-card-border-less-wrapper'>
                {list.map((item, index) => {
                    return (
                        <Card size='small' title={item.title} key={index}>
                            {item.paragraphs.map((str, indexChild) => {
                                    return (<p key={indexChild}>{str}</p>)
                                }
                            )}
                        </Card>
                    )
                })}
            </div>

        );
    }
}
