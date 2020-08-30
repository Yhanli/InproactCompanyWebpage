import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getWebsitePages} from "../../actions/frontend";
import {nextSlide} from "../../actions/generalActions";

import "./services.css";
import "./aboutus/aboutus.css"
import "./styles/fullLandingImage.css";
import "./styles/hoverStyles.css";
import "./styles/generalStyle.css";
import {SECTION_NAME} from "../../actions/constants";

class Services extends Component {
    state = {
        frontImageChanged:false,
    };
    static propTypes = {
        maincontent: PropTypes.array.isRequired,
        websitePage: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.props.getWebsitePages();
    }

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
                                    <img src={data.services.cover_image}/>
                                    <div className="front-image-name">
                                        <p>
                                            <span onMouseEnter={this.fadeInAnimate} className="front-image-header">Our Service</span>
                                            <br/>
                                            <a onClick={nextSlide(SECTION_NAME.FirstContent)}>{data.services.button_name}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid section2 " id={SECTION_NAME.FirstContent}>
                                <div id={`subsection1`} className="subsection1">
                                    <div className="subsection-text justified-text">
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
                                <div id={`subsection2`} className="subsection2 justified-text">
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
                                        <div className="subsection-img text-center">
                                            <img src={data.services.section_2_picture}
                                                 className="inspire-photo" alt="inspire"/>
                                        </div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps,{getWebsitePages})(Services);
