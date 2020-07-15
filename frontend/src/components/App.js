import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';

import {DatePicker, message} from "antd";
import { Layout } from 'antd';
import { Menu, Breadcrumb } from 'antd';
import Navbar from "./layout/Navbar";

const { Header, Footer, Sider, Content } = Layout;


const App = () => {
    return (
        <Layout>
            <Header>
                <div className="logo"></div>
                <Menu><Navbar /></Menu>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));