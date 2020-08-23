import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs,getLandingContent} from "../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./styles/fullLandingImage.css";
import "./services.css";
import "./aboutus/aboutusV2.css"
import "./styles/hoverStyles.css";
import "./styles/generalStyle.css";
import {Routes} from "../../actions/constants";

class Contact extends Component {

    state = {
        showSubItem: false
    };

    static propTypes = {
        aboutus:PropTypes.array.isRequired,
        maincontent: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getAboutUs();
        this.props.getLandingContent();
    }
    nextSlide = () => {
        const element = document.getElementById("content-section");
        smoothscroll.polyfill();
        window.scroll({
            top:element.offsetTop,
            behavior: "smooth"
        })
    };

    render() {
        return (
            <Fragment>
                {/*{console.log(this.props.aboutus)}*/}
                {this.props.aboutus.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-container"
                                 value={this.props.maincontent[0]?
                                     document.title = `Contact Us - ${this.props.maincontent[0].site_name}` : ''}>
                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.whyus.cover_image}/>
                                        <div className="front-image-name">
                                            <p>
                                                <a onClick={this.nextSlide}>Contact Us</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-section" id="content-section">
                                    <div className="content-section-row first-row subsection-text">
                                        <div className="head-box-container flex-wrap-normal subsection-text">
                                            <div className={"right-container"}>
                                                <h2 >{data.whyus.section_1_title}</h2>
                                                <p>{data.whyus.section_1_words}</p>
                                            </div>
                                            <div className={"left-container"}>
                                                <p>{data.whyus.section_2_text_1_paragraph}</p>
                                                <div style={ { textAlign:'right' }}>
                                                    <a onClick={this.expandExtra} className={"ReadMore"}>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"div-blank-space-5vw"}></div>

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

export default connect(mapStateToProps,{getAboutUs,getLandingContent})(Contact);
