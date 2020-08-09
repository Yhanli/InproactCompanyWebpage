import React, {Component, Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';

import Main from "./pages/main"
import AboutUs from "./pages/aboutus/aboutus";
import Story from "./pages/aboutus/story";
import Team from "./pages/aboutus/team";
import WhyUs from "./pages/aboutus/whyus";
import Services from "./pages/services";

import Navbar from "./layout/Navbar";
import Footer from './layout/Footer'
import NotFoundPage from './pages/notfound'

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
                            <Route exact path={'/story'} component={Story}/>
                            <Route exact path={'/team'} component={Team}/>
                            <Route exact path={'/whyus'} component={WhyUs}/>
                            <Route exact path={'/services'} component={Services}/>
                            <Route path="*" component={NotFoundPage} />
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