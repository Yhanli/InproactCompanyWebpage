import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs,getLandingContent} from "../../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./aboutusV2.css";
import "./fullLandingImage.css";
import "./../services.css"

class Team extends Component {

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
                            <div className="main-container" value={this.props.maincontent[0]? document.title = `About Us (Story) - ${this.props.maincontent[0].site_name}` : ''}>
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
                                        <div className="head-box-container subsection-text">
                                            <div>
                                                <img className="section1-img" src={data.team.section1_image}/>
                                            </div>
                                            <div>
                                                <h2>{data.team.section1_heading_1}</h2>
                                                <p>{data.team.section1_paragraph_1}</p>
                                            </div>
                                        </div>

                                        <div className="box-container subsection-text">
                                        {/*     style={{*/}
                                        {/*    backgroundImage: `url(${data.team.section1_image})`,*/}
                                        {/*    backgroundRepeat: "no-repeat",*/}

                                        {/*}}>*/}
                                            <p>{data.team.section1_subparagraph_1}</p>
                                            <p>{data.team.section1_subparagraph_2}</p>
                                        </div>
                                        <p>{data.team.section1_subparagraph_3}</p>
                                    </div>

                                    <div className="content-section-row">

                                    </div>

                                    <div className="content-section-row first-row">

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

export default connect(mapStateToProps,{getAboutUs,getLandingContent})(Team);
