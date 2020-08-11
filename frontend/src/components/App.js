import React, {Component, Fragment, useState, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';

// import Main from "./pages/main";
// import AboutUs from "./pages/aboutus/aboutus";
// import Story from "./pages/aboutus/story";
// import Team from "./pages/aboutus/team";
// import WhyUs from "./pages/aboutus/whyus";
// import Services from "./pages/services";

import {Routes} from './../actions/constants'

import Navbar from "./layout/Navbar";
import Footer from './layout/Footer'
import NotFoundPage from './pages/notfound'

import "../App.css"

import {Provider} from 'react-redux';
import store from '../store';

const Main = lazy(()=> import("./pages/main"))
const AboutUs = lazy(()=> import("./pages/aboutus/aboutus"))
const Story = lazy(()=> import("./pages/aboutus/story"))
const Team = lazy(()=> import("./pages/aboutus/team"))
const WhyUs = lazy(()=> import("./pages/aboutus/whyus"))
const Services = lazy(()=> import("./pages/services"))


class App extends Component {
    render () {
        return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div
                    style={{
                        position: "absolute",
                        top:'50%',
                        left:"50%",
                        transform: "translate(-50%, -50%)",
                        color: "#a27b43"
                    }}
                ><h1>Loading…</h1></div>}>
                <Fragment>
                    <div className='container'>
                        <Navbar/>
                        <Switch>
                            <Route exact path={Routes.Home} component={Main}/>

                                    <Route exact path={Routes.AboutUs} component={AboutUs}/>
                                    <Route exact path={Routes.Story} component={Story}/>
                                    <Route exact path={Routes.Team} component={Team}/>
                                    {/*<Route exact path={Routes.WhyUs} component={WhyUs}/>*/}
                                    <Route exact path={Routes.Services} component={Services}/>

                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                        <Footer />
                    </div>
                </Fragment>
                </Suspense>
            </BrowserRouter>
        </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));