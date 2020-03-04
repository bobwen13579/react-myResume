import React, { Component } from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;

export default class HeaderNav extends Component{
    //init frist
    constructor(props) {
        super(props)
    }
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    唐诗
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            下拉菜单
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        跳转到主页
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}
