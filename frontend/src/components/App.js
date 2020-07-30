import React, {Component, Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Main from "./pages/Main"

import Navbar from "./layout/Navbar";
import "../App.css"

import {Provider} from 'react-redux';
import store from '../store';

class App extends Component {
    render () {
        return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar/>
                    <div className='container'>
                        <Switch>
                            <Route exact path={'/'} component={Main}/>
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));