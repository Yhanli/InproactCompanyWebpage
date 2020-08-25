import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs, getLandingContent, getWebsitePages} from "../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./styles/fullLandingImage.css";
import "./services.css";
import "./aboutus/aboutusV2.css"
import "./styles/hoverStyles.css";
import "./styles/generalStyle.css";
import {Routes, Time_Out} from "../../actions/constants";
import {AUTO, MOUSE_CLICK} from "../../actions/types";

class Contact extends Component {
    state = {
        frontImageChanged:false,
    };
    static propTypes = {
        maincontent: PropTypes.array.isRequired,
        websitePage: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.props.getWebsitePages();
        window.onload = setTimeout(
            this.nextSlide(AUTO),
            Time_Out.timeToContent)
    }


    nextSlide = (actionType=AUTO) => () => {
        if (window.pageYOffset !== 0 && actionType === AUTO) return;
        const element = document.getElementById("section2");
        smoothscroll.polyfill();
        window.scroll({
            top:element.offsetTop,
            behavior: "smooth"
        })
    };
    fadeInAnimate = () => {
        if (!this.state.frontIamageChanged){
            const element = document.querySelector(".front-image-header");
            element.className = 'h1-fade-in-perm';
            this.setState({
                frontImageChanged:true
            });
        }
    };

    render() {
        const content = this.props.websitePage;
        if (this.props.websitePage.loading || content.websitePage.services == undefined){
            return (<Fragment/>)
        }else{
            const data = content.websitePage;
            return (
                <Fragment>
                    <div className="main-containers" value={this.props.maincontent[0]? document.title = `Service - ${this.props.maincontent[0].site_name}` : ''}>
                        <div className="section1">
                            <div className="front-image">
                                <img src={data.contact.cover_image}/>
                                <div className="front-image-name">
                                    <p>
                                        <span onClick={this.nextSlide(MOUSE_CLICK)} className="front-image-header">{data.contact.button_name}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid section2" id="section2">
                            <div id={`subsection1`} className="subsection1">
                                <div className="subsection-text">
                                    <h2>{data.services.section_1_title}</h2>
                                    <p>{data.services.section_1_words}</p>
                                </div>
                                <div className="subsection-img">
                                    <img src={data.services.section_1_picture}
                                         className="inspire-photo" alt="inspire"/>
                                </div>
                            </div>
                            <div className="subsection-divider"><span>{data.services.section_1_2_divider}</span></div>
                            <div className="subsection-divider-line"></div>

                            <div id={`subsections3`}>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </Fragment>

            )
        }
    }
}

const mapStateToProps = state=> {
    return{
        maincontent:state.maincontent.maincontent,
        websitePage:state.websitePage
    }
};

export default connect(mapStateToProps,{getWebsitePages})(Contact);
