import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs, getLandingContent} from "../../actions/frontend";

import "./main.css";
import "./aboutus/aboutus.css"



class Services extends Component {

    static propTypes = {
        maincontent:PropTypes.array.isRequired
    };
    nextSlide = () => {
        const height = document.getElementById("section2").offsetHeight;
        document.querySelector('html').scrollTo(0, height - 75);
    };
    render() {
        return (
            <Fragment>
                {this.props.maincontent.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-containers" value={this.props.maincontent[0]? document.title = `Home - ${this.props.maincontent[0].site_name}` : ''}>
                                <div className="main-section">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            {data.landing_images.map(imgs=>{
                                                return(
                                                    <div className={`carousel-item ${imgs.id===data.landing_images[0].id?'active':""}`} key={imgs.id}>
                                                        <img src={imgs.picture} className="corousel-img d-block w-100" alt="..."/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                           data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                           data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="container-fluid section2" id="section2">
                                    <div id={`subsection1`} className="subsection1">
                                        <div className="subsection-text">
                                            <h2>{data.section_1_title}</h2>
                                            <p>{data.section_1_words}</p>
                                        </div>
                                        <div className="subsection-img">
                                            <img src={data.section_1_picture}
                                                 className="inspire-photo" alt="inspire"/>
                                        </div>
                                    </div>
                                    <div className="subsection-divider"><span>{data.section_1_2_divider}</span></div>
                                    <div className="subsection-divider-line"></div>
                                    <div id={`subsection2`} className="subsection2">
                                        <div className="subsection-row">
                                            <div className="subsection-text">
                                                <h2>{data.section_2_text_1_title}</h2>
                                                <p>{data.section_2_text_1_paragraph}</p>
                                            </div>
                                            <div className="subsection-text">
                                                <h2>{data.section_2_text_2_title}</h2>
                                                <p>{data.section_2_text_2_paragraph}</p>
                                            </div>
                                        </div>
                                        <div className="subsection-row">
                                            <div className="subsection-last_row ">

                                                <div className="subsection-text">
                                                    <h2>{data.section_2_text_4_title}</h2>
                                                    <p>{data.section_2_text_4_paragraph}</p>
                                                </div>
                                                <div className="subsection-text">
                                                    <h2>{data.section_2_text_3_title}</h2>
                                                    <p>{data.section_2_text_3_paragraph}</p>
                                                </div>
                                            </div>

                                            <div className="subsection-img">
                                                <img src={data.section_2_picture}
                                                     className="inspire-photo" alt="inspire"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id={`subsections3`}>
                                        {/*<p>testing</p>*/}
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
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps,{getLandingContent})(Services);
