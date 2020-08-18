import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs,getLandingContent} from "../../../actions/frontend";
import smoothscroll from 'smoothscroll-polyfill'
import "./aboutusV2.css";
import "./fullLandingImage.css";
import "./../services.css";
import "./hoverStyles.css";
import "./generalStyle.css";
import {Routes} from "../../../actions/constants";

class WhyUs extends Component {

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

    expandExtra = () => {
        const expand_element = document.getElementById("expand_content");
        if (!this.state.showSubItem){
            expand_element.classList.remove('hide-display');
            smoothscroll.polyfill();
            window.scroll({
                top:expand_element.offsetTop,
                behavior: "smooth"
            });
            this.setState({showSubItem: true})
        }
        else{
            expand_element.classList.add('hide-display');
            this.nextSlide();
            this.setState({showSubItem: false})
        }
    };

    wordLength = (words) =>() => {
        // console.log(words.length);
        return words.length
    };

    render() {
        return (
            <Fragment>
                {/*{console.log(this.props.aboutus)}*/}
                {this.props.aboutus.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-container" value={this.props.maincontent[0]? document.title = `About Us (Why Us) - ${this.props.maincontent[0].site_name}` : ''}>
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
                                        <div className={"text-grey-bg"}>
                                            {/*<p className={'top-space-2'}>{data.team.section1_subparagraph_3}</p>*/}
                                        </div>
                                    </div>
                                    <div className={"div-blank-space-5vw"}></div>
                                    <div className="content-section-row hide-display" id="expand_content" style={{

                                    }}>
                                        <div className="subsection-text top-space-2">
                                            <h2 >{data.whyus.section_1_title}</h2>
                                        </div>
                                        <div>
                                            {data.whyus_subitems.map(subitem=>{
                                                return(
                                                    <div key={subitem.id} className="vert-margin-4">
                                                        <div className="text-border-shadow-header horiz-padding-2 vert-padding-21">
                                                            <h2 className="subheading">{subitem.heading}</h2>
                                                            <div className="gold-divider-sm-md bot-margin-2" style={{
                                                                width: `${subitem.heading.length/2}vw`,
                                                                maxWidth:`${subitem.heading.length/2}rem`
                                                            }}></div>
                                                            <p className="subtext justified-text">{subitem.paragraph}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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
