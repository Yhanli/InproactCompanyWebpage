import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs, getLandingContent} from "../../actions/frontend";

import "./services.css";
import "./aboutus/aboutus.css"
import smoothscroll from "smoothscroll-polyfill";

class Services extends Component {
    state = {
        frontImageChanged:false
    };
    static propTypes = {
        aboutus:PropTypes.array.isRequired,
        maincontent: PropTypes.array.isRequired,
    };
    componentDidMount() {
        this.props.getAboutUs();
        this.props.getLandingContent();
    }

    nextSlide = () => {
        const element = document.getElementById("section2");
        smoothscroll.polyfill();
        window.scroll({
            top:element.offsetTop,
            behavior: "smooth"
        })
    };
    fadeInAnimate = () => {
        if (!this.state.frontImageChanged){
            const element = document.querySelector(".front-image-header");
            element.className = 'h1-fade-in-perm';
            this.setState({
                frontImageChanged:true
            });
        }
    };

    render() {
        return (
            <Fragment>
                {this.props.aboutus.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-containers" value={this.props.maincontent[0]? document.title = `Service - ${this.props.maincontent[0].site_name}` : ''}>
                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.services.cover_image}/>
                                        <div className="front-image-name">
                                            <p>
                                                <span onMouseEnter={this.fadeInAnimate} className="front-image-header">Our Service</span>
                                                <br/>
                                                <a onClick={this.nextSlide}>{data.services.button_name}</a>
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
                                    <div id={`subsection2`} className="subsection2">
                                        <div className="subsection-row">
                                            <div className="subsection-text">
                                                <h2>{data.services.section_2_text_1_title}</h2>
                                                <p>{data.services.section_2_text_1_paragraph}</p>
                                            </div>
                                            <div className="subsection-text">
                                                <h2>{data.services.section_2_text_2_title}</h2>
                                                <p>{data.services.section_2_text_2_paragraph}</p>
                                            </div>
                                        </div>
                                        <div className="subsection-row">
                                            <div className="subsection-last_row ">

                                                <div className="subsection-text">
                                                    <h2>{data.services.section_2_text_4_title}</h2>
                                                    <p>{data.services.section_2_text_4_paragraph}</p>
                                                </div>
                                                <div className="subsection-text">
                                                    <h2>{data.services.section_2_text_3_title}</h2>
                                                    <p>{data.services.section_2_text_3_paragraph}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-img">
                                                <img src={data.services.section_2_picture}
                                                     className="inspire-photo" alt="inspire"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id={`subsections3`}>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </Fragment>
        )
    }
}

const mapStateToProps = state=> ({
    aboutus:state.aboutus.aboutus,
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps,{getAboutUs,getLandingContent})(Services);
