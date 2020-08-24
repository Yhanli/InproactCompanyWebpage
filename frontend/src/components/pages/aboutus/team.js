import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs} from "../../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./aboutusV2.css";
import "../styles/fullLandingImage.css";
import "./../services.css";
import "../styles/hoverStyles.css";
import "../styles/generalStyle.css";


class Team extends Component {

    static propTypes = {
        aboutus:PropTypes.array.isRequired,
        maincontent: PropTypes.array.isRequired
    };
    componentDidMount(){
        this.props.getAboutUs();
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
                            <div className="main-container" value={this.props.maincontent[0]? document.title = `About Us (Team) - ${this.props.maincontent[0].site_name}` : ''}>
                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.team.cover_image}/>
                                        <div className="front-image-name">
                                            <p>
                                                <a onClick={this.nextSlide}>{data.team.button_name}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-section" id="content-section">
                                    <div className="content-section-row first-row subsection-text">
                                        <div className="head-box-container flex-wrap-reverse subsection-text">
                                            <div>
                                                <img className="section1-img enlg-glow-gold" src={data.team.section1_image} style={{
                                                    borderRadius: "50%",
                                                    margin:"2rem 0",
                                                    maxWidth: "80vw",
                                                    minWidth: "200px",
                                                }}/>
                                            </div>
                                            <div className={"right-container left-border-gold-sm"}>
                                                <h2>{data.team.section1_heading_1}</h2>
                                                <p>{data.team.section1_paragraph_1}</p>
                                                <p>{data.team.section1_subparagraph_1}</p>
                                                <p>{data.team.section1_subparagraph_2}</p>
                                            </div>
                                        </div>
                                        <div className={"text-grey-bg"}>
                                            <p className={'top-space-2'}>{data.team.section1_subparagraph_3}</p>
                                        </div>
                                    </div>

                                    <div className={"div-blank-space-10vw"}></div>

                                    <div className="content-section-row first-row subsection-text">
                                        <div>
                                            <h2 className={"text-border-shadow-header"}>{data.team.section2_heading_1}</h2>
                                        </div>
                                        <div className="head-box-container flex-wrap-normal subsection-text">
                                            <div>
                                                <img className="section1-img enlg-glow-gold" src={data.team.section2_image} style={{
                                                    borderRadius: "5%",
                                                    margin:"2vw 0",
                                                    maxWidth: "320px",
                                                    minWidth: "200px",
                                                }}/>
                                            </div>
                                            <div className={"right-container top-margin-2 bot-margin-2"}>
                                                <p>{data.team.section2_paragraph_1}</p>
                                                <p>{data.team.section2_subparagraph_1}</p>
                                                <p>{data.team.section2_subparagraph_2}</p>
                                            </div>
                                        </div>
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

export default connect(mapStateToProps,{getAboutUs})(Team);
