import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs,getLandingContent} from "../../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./aboutus.css";

class WhyUs extends Component {

    static propTypes = {
        aboutus:PropTypes.array.isRequired,
        maincontent: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getAboutUs();
        this.props.getLandingContent();
    }

    nextSlide = () => {
        const element = document.getElementById("content-section-flex");
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
                                        <img src={data.whyus.cover_image}/>
                                        <div className="front-image-name">
                                            <p>
                                                <a onClick={this.nextSlide}>{data.whyus.button_name}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-section-flex" id="content-section-flex">
                                        <div className="subsection-flex">
                                            <div className="subsection-head subsection-text">
                                                <h2>{data.whyus.main_section_heading}</h2>
                                                <p>{data.whyus.main_section_paragraph}</p>
                                            </div>
                                            <div className="subsection-body">
                                                <div>
                                                    <img src={data.whyus.section1_image}/>
                                                </div>
                                                <div className="subsection-head subsection-text">
                                                    <h2>{data.whyus.section1_heading_1}</h2>
                                                    <p>{data.whyus.section1_paragraph_1}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-body2">
                                                <div className="subsection-text">
                                                    <blockquote>
                                                        <p>
                                                            {data.whyus.section1_subparagraph_1}
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            </div>
                                            <div className="subsection-tail">
                                                <div className="subsection-text text-bg">
                                                    <p>{data.whyus.section1_subparagraph_2}</p>
                                                </div>
                                                <div className="subsection-text">
                                                    <p>{data.whyus.section1_subparagraph_3}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-end">
                                                <div className="subsection-text">
                                                    <p className="famous-quote"><span className="quote">{data.team.section1_quote_1.split("–")[0]}</span> <span className="quote-by">- {data.team.section1_quote_1.split("–")[1]}</span></p>
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
                                                    <img src={data.team.section2_image}/>
                                                </div>
                                                <div className="subsection-head subsection-text">
                                                    <h2>{data.team.section2_heading_1}</h2>
                                                    <p>{data.team.section2_paragraph_1}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-body2">
                                                <div className="subsection-text text-bg">
                                                    {/*<blockquote>*/}
                                                    <p>
                                                        {data.team.section2_subparagraph_1}
                                                    </p>
                                                    {/*</blockquote>*/}

                                                </div>
                                            </div>
                                            <div className="subsection-tail">
                                                <div className="subsection-text">
                                                    <p>{data.team.section2_subparagraph_2}</p>
                                                </div>
                                                <div className="subsection-text text-bg">
                                                    <p>{data.team.section2_subparagraph_3}</p>
                                                </div>
                                            </div>
                                            <div className="subsection-end">
                                                <div className="subsection-text">
                                                    <p className="famous-quote"><span className="quote">{data.team.section2_quote_1.split("–")[0]}</span> <span className="quote-by">- {data.team.section2_quote_1.split("–")[1]}</span></p>
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

export default connect(mapStateToProps,{getAboutUs,getLandingContent})(WhyUs);
