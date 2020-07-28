import React, {Component, Fragment, useState} from 'react';
import ReactDOM from 'react-dom';

import Navbar from "./layout/Navbar";
import "../App.css"

import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
    return (
        <Provider store={store}>
            <Fragment>
                <Navbar />
                <div className='container-fluid'>
                </div>
            </Fragment>
        </Provider>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));