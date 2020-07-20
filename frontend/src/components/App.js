import React, {Component, Fragment, useState} from 'react';
import ReactDOM from 'react-dom';

import Navbar from "./layout/Navbar";



const App = () => {
    return (
        <Fragment>
            <div className='container-fluid'>
            <Navbar />
            </div>
        </Fragment>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));