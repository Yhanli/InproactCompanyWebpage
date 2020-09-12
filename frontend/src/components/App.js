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
import Footer from './layout/Footer';
import NotFoundPage from './pages/notfound';
import Alerts from "./layout/Alerts";

import "../App.css"

import {Provider} from 'react-redux';
import store from '../store';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate_ from "./modules/AlertTemplates";

const Main = lazy(()=> import("./pages/main"));
const AboutUs = lazy(()=> import("./pages/aboutus/aboutus"));
const Story = lazy(()=> import("./pages/aboutus/story"));
const Team = lazy(()=> import("./pages/aboutus/team"));
const WhyUs = lazy(()=> import("./pages/aboutus/whyus"));
const Services = lazy(()=> import("./pages/services"));
const Contact = lazy(()=> import("./pages/contact"));
const OurBrand = lazy(()=> import("./pages/ourBrand"));
const InSight = lazy(()=> import("./pages/inSight"));
const ICare = lazy(()=> import("./pages/iCare"));
import SiteMap from "./sitemap.xml";

const alertOptions = {
    timeout: 5000,
    position: 'middle'
};

class App extends Component {

    render () {
        return (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate_} {...alertOptions}>
                <BrowserRouter>

                    <Fragment>

                        <div className='container'>
                            <Navbar/>
                            <Alerts />
                            <Suspense fallback={
                                <div
                                    style={{
                                        position: "fixed",
                                        top:'50%',
                                        left:"50%",
                                        zIndex: "100",
                                        transform: "translate(-50%, -50%)",
                                        color: "#a27b43"
                                    }}
                                ><h1>Loading…</h1></div>
                            }>
                            <Switch>
                                <Route exact path={Routes.Home} component={Main}/>

                                    <Route exact path={Routes.AboutUs} component={AboutUs}/>
                                    <Route exact path={Routes.Story} component={Story}/>
                                    <Route exact path={Routes.Team} component={Team}/>
                                    <Route exact path={Routes.WhyUs} component={WhyUs}/>
                                    <Route exact path={Routes.Services} component={Services}/>
                                    <Route exact path={Routes.Contact} component={Contact}/>
                                    <Route exact path={Routes.OurBrand} component={OurBrand}/>
                                    <Route exact path={Routes.InSight} component={InSight}/>
                                    <Route exact path={Routes.ICare} component={ICare}/>

                                <Route path="*" component={NotFoundPage} />
                            </Switch>
                                {/*<a href={SiteMap}  target = "_blank">Download Pdf</a>*/}
                            <Footer />
                            </Suspense>

                        </div>
                    </Fragment>
                </BrowserRouter>
            </AlertProvider>
        </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));