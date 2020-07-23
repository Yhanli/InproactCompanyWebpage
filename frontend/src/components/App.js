import React, {Component, Fragment, useState} from 'react';
import ReactDOM from 'react-dom';

import Navbar from "./layout/Navbar";

import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
    return (
        <Provider store={store}>
            <Fragment>
                <div className='container-fluid'>
                <Navbar />
                </div>
            </Fragment>
        </Provider>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));