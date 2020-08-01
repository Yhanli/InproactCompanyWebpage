import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAboutUs} from "../../actions/frontend";

import './footer.css';

class Footer extends Component {

    static  propTypes = {
        aboutus: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getAboutUs();
    }

    state = {
    };

    render() {
        return (
            <Fragment>
                <div className={`footer`}>
                    <div className={`inner_footer`}>
                        <div className={`logo_container`}>
                            <img src={this.props.aboutus.map(aboutus => (
                                aboutus.logo
                            ))} alt={`footer_logo`}/>
                        </div>

                        <div className={`footer_third`}>
                            <h2>Initiatives Navigator</h2>
                            <div className="border-brline"></div>
                            <p>With a small tweak of your mindset, you can see the unseen and make a huge difference!
                                <br/>
                                <br/>
                                <span className="dont-wait">Why wait? Let’s start now!</span>
                                <a className={`contactus_btn`} href="/test">Contact us</a></p>
                        </div>

                        <div className="column_breaker"></div>

                        <div className="our-news">
                            <h3>Follow Us !</h3>
                            <div className="social-media">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <p>Subscribe Your Email to get our news and updates.</p>
                            <form action="" className="newsletter-form">
                                <input type="text" className="txtb" placeholder="Enter Your Email"/>
                                    <input type="submit" className="btn" value="submit"/>
                            </form>
                        </div>
                    </div>
                    <div className={`copy_info`}>
                        <p> &copy;2018 - 2020 Inproact - All Rights Reserved. Powered by Yhanl.</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state=> ({
    aboutus:state.aboutus.aboutus
});

export default connect(mapStateToProps,{getAboutUs})(Footer);