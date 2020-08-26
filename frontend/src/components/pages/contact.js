import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getWebsitePages} from "../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./styles/fullLandingImage.css";
import "./services.css";
import "./contact.css";
import "./styles/hoverStyles.css";
// import "./styles/buttons.css";
import "./styles/generalStyle.css";
import {Routes, Time_Out, FORMS} from "../../actions/constants";
import {AUTO, MOUSE_CLICK} from "../../actions/types";

import ContactForm from "./forms/contactForm";
import BusinessContactForm from "./forms/businessContactForm";
import IndividualContactForm from "./forms/individualContactForm";


class Contact extends Component {
    state = {
        frontImageChanged:false,
        formNum:FORMS.Contact,
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
        const element = document.getElementById("content-section");
        smoothscroll.polyfill();
        window.scroll({
            top:element.offsetTop,
            behavior: "smooth"
        })
    };

    stringToHtml = (stringItem) => () => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(stringItem, 'text/html');
        return doc.body;
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

    onChange = e => {

        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    swithForm = e =>{
        if (this.state.formNum === e.target.id){
            this.setState({formNum: FORMS.Contact});
            return
        }
        this.setState({formNum: e.target.id});
        console.log(e.target.id)
    };

    render() {
        const content = this.props.websitePage;
        if (this.props.websitePage.loading || content.websitePage.services == undefined){
            return (<Fragment/>)
        }else{
            const data = content.websitePage;
            return (
                <Fragment>
                    <div className="main-containers" value={this.props.maincontent[0]? document.title = `Contact Us - ${this.props.maincontent[0].site_name}` : ''}>
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
                        <div className="content-section" id="content-section">

                            <div className="content-section-row first-row">
                                <div className="head-box-container flex-wrap-normal">
                                    <div className="row-max"><div className="content-main-heading"><h2>Get In Touch</h2></div></div>
                                    <div className="row-max"><div className="content-main-subtext align-centre">
                                        <p>Feel free to fill in your details below along with a brief message. We will get back to you as soon as we can.</p></div></div>
                                    <div className="row-max">
                                        <span className={`form-select 
                                            ${this.state.formNum===FORMS.Business?"active":""}
                                        `} id={FORMS.Business} onClick={this.swithForm}>Business Service</span>
                                        <span className={`form-select 
                                            ${this.state.formNum===FORMS.Individual?"active":""}
                                        `} id={FORMS.Individual} onClick={this.swithForm}>Individual Service</span>
                                        {/*<span className={`form-select */}
                                        {/*    ${this.state.formNum===FORMS.Individual?"active":""}*/}
                                        {/*`} id={FORMS.Individual} onClick={this.swithForm}>Contact</span>*/}
                                    </div>

                                </div>
                                <div className="head-box-container">
                                    {/*initial Contact Form*/}
                                    <div className={this.state.formNum!==FORMS.Contact?"hide-display":""}><ContactForm /></div>
                                    <div className={this.state.formNum!==FORMS.Business?"hide-display":""}><BusinessContactForm /></div>
                                    <div className={this.state.formNum!==FORMS.Individual?"hide-display":""}><IndividualContactForm /></div>

                                </div>

                            </div>
                            <div className="line-90p align-centre top-margin-2 bot-margin-2"></div>
                            <div className="content-section-row first-row subsection-text">
                                <div className="head-box-container flex-wrap-reverse subsection-text">
                                    <div className={"rightleft-container"} style={{
                                        width:"550px",
                                        height:"350px",
                                        maxWidth:"95vw",
                                        maxHeight:"95vw"
                                    }}>
                                        <iframe
                                            src={`${data.contact.embed_map_frame}`}
                                            className="map-frame-2c"
                                            frameBorder="0" allowFullScreen="" aria-hidden="false"
                                            tabIndex="0"
                                        />
                                    </div>
                                    <div className={"right-container top-margin-2"}>
                                        <h2 className="subheading">Other Ways To Contact Us</h2>

                                        {data.contact.phone_primary? <p className="focused-text">
                                            <i className="fas fa-phone"></i>
                                            &nbsp;
                                            <a href={`tel:${data.contact.phone_primary}`}>{data.contact.phone_primary}</a>
                                            <br/>
                                        <span>{data.contact.phone_description_primary}</span>
                                        </p>:""}
                                        {data.contact.phone_secondary? <p className="focused-text"><i className="fas fa-phone"></i>
                                            &nbsp;
                                            <a href={`tel:${data.contact.phone_secondary}`}>{data.contact.phone_secondary}</a>
                                            <br/>
                                            <span>{data.contact.phone_description_secondary}</span>
                                        </p> :""}

                                        {data.contact.email?<p className="focused-text"><i className="far fa-envelope"></i>&nbsp;
                                            <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>:""}
                                        {data.contact.address?<p className="focused-text"><i className="fas fa-map-marker-alt"></i>&nbsp;
                                            <a href={data.contact.address_map_link}
                                               target="_blank">{data.contact.address}</a></p>:""}
                                    </div>
                                </div>
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
