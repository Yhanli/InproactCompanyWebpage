import React, {Component, Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';

import Main from "./pages/main"
import AboutUs from "./pages/aboutus";

import Navbar from "./layout/Navbar";
import Footer from './layout/Footer'

import "../App.css"

import {Provider} from 'react-redux';
import store from '../store';


class App extends Component {
    render () {
        return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>

                    <div className='container'>
                        <Navbar/>
                        <Switch>
                            <Route exact path={'/'} component={Main}/>
                            <Route exact path={'/aboutus'} component={AboutUs}/>
                        </Switch>
                        <Footer />
                    </div>
                </Fragment>
            </BrowserRouter>
        </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));