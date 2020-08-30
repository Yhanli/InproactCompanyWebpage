import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs} from "../../../actions/frontend";
import {nextSlide} from "../../../actions/generalActions";
import "./aboutus.css";
import "./../services.css"
import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";
import {SECTION_NAME} from "../../../actions/constants";


class Story extends Component {

    static propTypes = {
        aboutus:PropTypes.array.isRequired,
        maincontent: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getAboutUs();
    }

    render() {
        return (
            <Fragment>
                {this.props.aboutus.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-container" value={this.props.maincontent[0]? document.title = `About Us (Story) - ${this.props.maincontent[0].site_name}` : ''}>
                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.story.cover_image}/>
                                        <div className="front-image-name">
                                            <p>
                                            <a onClick={nextSlide(SECTION_NAME.FirstContent)}>{data.story.button_name}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-section-flex" id={SECTION_NAME.FirstContent}>
                                        <div className="subsection-flex">
                                            <div className="subsection-head subsection-text">
                                                <h2>{data.story.main_section_heading}</h2>
                                                <p>{data.story.main_section_paragraph}</p>
                                            </div>
                                            <div className="subsection-body">
                                                <div>
                                                    <img src={data.story.section1_image}/>
                                                </div>
                                                <div className="subsection-head subsection-text">
                                                    <h2>{data.story.section1_heading_1}</h2>
                                                    <p>{data.story.section1_paragraph_1}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-body2 justified-text">
                                                <div className="subsection-text">
                                                    <blockquote>
                                                        <p>
                                                            {data.story.section1_subparagraph_1}
                                                        </p>
                                                    </blockquote>

                                                </div>
                                            </div>
                                            <div className="subsection-tail justified-text">
                                                <div className="subsection-text text-bg">
                                                    <p>{data.story.section1_subparagraph_2}</p>
                                                </div>
                                                <div className="subsection-text">
                                                    <p>{data.story.section1_subparagraph_3}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-end">
                                                <div className="subsection-text">
                                                    <p className="famous-quote"><span className="quote">{data.story.section1_quote_1.split("–")[0]}</span> <span className="quote-by">- {data.story.section1_quote_1.split("–")[1]}</span></p>
                                                    {/*<p>{data.story.section1_quote_1}</p>*/}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="subsection-divider-line"></div>

                                        <div className="subsection-flex">
                                            {/*<div className="subsection-head subsection-text">*/}
                                            {/*    <h2>{data.story.section2_heading_1}</h2>*/}
                                            {/*    <p>{data.story.section2_paragraph_1}</p>*/}
                                            {/*</div>*/}
                                            <div className="subsection-body">
                                                <div>
                                                    <img src={data.story.section2_image}/>
                                                </div>
                                                <div className="subsection-head subsection-text">
                                                    <h2>{data.story.section2_heading_1}</h2>
                                                    <p>{data.story.section2_paragraph_1}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-body2 justified-text">
                                                <div className="subsection-text text-bg">
                                                    {/*<blockquote>*/}
                                                        <p>
                                                            {data.story.section2_subparagraph_1}
                                                        </p>
                                                    {/*</blockquote>*/}

                                                </div>
                                            </div>
                                            <div className="subsection-tail justified-text">
                                                <div className="subsection-text">
                                                    <p>{data.story.section2_subparagraph_2}</p>
                                                </div>
                                                <div className="subsection-text text-bg">
                                                    <p>{data.story.section2_subparagraph_3}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-end">
                                                <div className="subsection-text">
                                                    <p className="famous-quote"><span className="quote">{data.story.section2_quote_1.split("–")[0]}</span> <span className="quote-by">- {data.story.section2_quote_1.split("–")[1]}</span></p>
                                                    {/*<p>{data.story.section1_quote_1}</p>*/}
                                                </div>
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

export default connect(mapStateToProps,{getAboutUs})(Story);
