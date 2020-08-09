import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './footer.css';

class Footer extends Component {

    static  propTypes = {
        maincontent: PropTypes.array.isRequired
    };

    // const favicon = document.getElementById("favicon");
    // favicon.href = "http://inproact.theia.nz/wp-content/uploads/2018/03/favicon.ico";

    render() {
        // console.log(this.props.maincontent.slice(0,1));
        return (
            <Fragment>
                {this.props.maincontent.slice(0).map(data=> {
                    return(
                        <Fragment key={data.id}>
                            <script>
                            {document.getElementById("favicon").href = data.favicon}
                            </script>
                            <div className={`footer`}>
                                <div className={`inner_footer`}>
                                    <div className={`logo_container`}>
                                        <a href="/">
                                        <img
                                            src={data.logo} alt={`footer_logo`}/>
                                        </a>
                                    </div>

                                    <div className={`footer_third`}>
                                        <h2>{data.footer_title}</h2>
                                        <div className="border-brline"></div>
                                        <p>{data.footer_phrase}
                                            <br/>
                                            <br/>
                                            <span className="dont-wait">Why wait? Let’s start now!</span>
                                            <a className={`contactus_btn`} href="/contact">Contact us</a></p>
                                    </div>

                                    <div className="column_breaker"></div>
                                    <div className="our-news">
                                        <h3>Follow Us !</h3>
                                        <div className="social-media">
                                            {data.facebook ? <a href={`${data.facebook}`}><i className="fab fa-facebook-f"></i></a> : ""}
                                            {data.twitter ? <a href={`${data.twitter}`}><i className="fab fa-twitter"></i></a> : ""}
                                            {data.instagram ? <a href={`${data.instagram}`}><i className="fab fa-instagram"></i></a> : ""}
                                            {data.youtube ? <a href={`${data.youtube}`}><i className="fab fa-youtube"></i></a> : ""}
                                            {data.linkedin ? <a href={`${data.linkedin}`}><i className="fab fa-linkedin-in"></i></a> : ""}
                                        </div>
                                        <p>Subscribe Your Email to get our news and updates.</p>
                                        <form action="" className="newsletter-form">
                                            <input type="text" className="txtb" placeholder="Enter Your Email"/>
                                                <input type="submit" className="btn" value="submit"/>
                                        </form>
                                    </div>
                                </div>
                                <div className={`copy_info`}>
                                    <p> &copy;2020 {data.site_name} - All Rights Reserved. Powered by Yhanl.</p>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </Fragment>
        );
    }
}

const mapStateToProps = state=> ({
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps)(Footer);

