import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs, getLandingContent} from "../../actions/frontend";

import "./main.css";
import "./aboutus/aboutus.css";
import "./services.css"

import {Routes} from './../../actions/constants'



class Main extends Component {
    state = {
        currentScrollPos:window.innerHeight,
        previousScrollPos:0
    };
    static propTypes = {
        maincontent:PropTypes.array.isRequired
    };
    nextSlide = () => {
        const height = document.getElementById("section2").offsetHeight;
        document.querySelector('html').scrollTo(0, height - 75);
    };

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const currentScrollPos = window.pageYOffset + window.outerHeight - 100;
        this.setState({currentScrollPos});
        // console.log(`${this.state.currentScrollPos}  ${this.state.previousScrollPos}`);
        const all_fade_items = document.querySelectorAll(".fade-in-allowed");
        all_fade_items.forEach((section, index) => {
            if (this.state.currentScrollPos > section.offsetTop){
                section.classList.add('fade-in');
                section.classList.remove('fade-in-allowed');

            }
        });
        const all_drop_items = document.querySelectorAll(".drop-in-allowed");
        all_drop_items.forEach((section, index) => {
            if (this.state.currentScrollPos > section.offsetTop){
                section.classList.add('drop-in');
                section.classList.remove('drop-in-allowed');
            }
        });
    };

    render() {

        return (
            <Fragment>
                {this.props.maincontent.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-containers" value={this.props.maincontent[0]? document.title = `Home - ${this.props.maincontent[0].site_name}` : ''}>

                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.cover_image}/>

                                    </div>
                                </div>


                                <div className="main-section2" id="section2">


                                    <div className="main-subsection1 fade-in-allowed" id="section1">
                                        <div className="subsection-inner1">
                                            <div className="subsection-content left-content">
                                                <div className={"title-num"}>
                                                    <div className="line-through"></div>
                                                    <span className="">01</span>
                                                </div>
                                                <div className="">
                                                    <h2 style={{
                                                        textAlign:"left"
                                                    }}>{data.section_1_heading1}</h2>
                                                </div>
                                            </div>
                                            <div className="subsection-content center-content center-img">
                                                <img src={`${data.section_1_picture}`} />
                                            </div>
                                            <div className="subsection-content right-content">
                                                <div>
                                                    <p>{data.section_1_paragraph1}</p>
                                                    <div style={ { textAlign:'right' }}>
                                                        <a href={Routes.AboutUs} className={"ReadMore"}>Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`main-subsection-with-bg fade-in-allowed`}>
                                        <div className="subsection-inner1">
                                            <div className="subsection-content left-content">
                                                    <p>{data.section_1_stat_caption1.split(' ').map(word=>{
                                                        return(
                                                            <span className="lit-up" key={word}>{word} </span>
                                                        )
                                                    })}</p>
                                            </div>
                                            <div className="subsection-content right-content">
                                                <span>{data.section_1_stat_title1}</span><br/>
                                                <span className="stat-number" style={{
                                                    left: `${data.section_1_stat_number1-8}%`
                                                }}>{data.section_1_stat_number1}%</span>
                                                <div className="stat-bar" style={{
                                                    width:`${data.section_1_stat_number1-10}%`,
                                                    top:"-10px"
                                                }} />
                                                <span>{data.section_1_stat_title2}</span><br/>
                                                <span className="stat-number" style={{
                                                    left: `${data.section_1_stat_number2-8}%`
                                                }}>{data.section_1_stat_number2}%</span>
                                                <div className="stat-bar" style={{
                                                    width:`${data.section_1_stat_number2-10}%`,
                                                    top:"-10px"
                                                }} />
                                                <span>{data.section_1_stat_title3}</span><br/>
                                                <span className="stat-number" style={{
                                                    left: `${data.section_1_stat_number3-8}%`
                                                }}>{data.section_1_stat_number3}%</span>
                                                <div className="stat-bar" style={{
                                                    width:`${data.section_1_stat_number3-10}%`,
                                                    top:"-10px"
                                                }} />

                                            </div>
                                        </div>
                                    </div>


                                    <div className="main-subsection1 fade-in-allowed">
                                        <div className="subsection-inner1">
                                            <div className="subsection-content left-content">
                                                <div className={"title-num"}>
                                                    <div className="line-through"></div>
                                                    <span className="">02</span>
                                                </div>
                                                <div className="">
                                                    <h2 style={{
                                                        textAlign:"left"
                                                    }}>{data.section_1_heading2}</h2>
                                                </div>
                                            </div>
                                            <div className="subsection-content center-content center-img">
                                                <img src={`${data.section_2_picture}`} style={{
                                                    borderRadius:'1px'
                                                }}/>
                                            </div>
                                            <div className="subsection-content right-content">
                                                <div>
                                                    <p>{data.section_1_paragraph2}</p>
                                                    <div style={ { textAlign:'right' }}>
                                                        <a href={Routes.Story} className={"ReadMore"}>Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="main-subsection-with-bg fade-in-allowed">
                                        <div className="subsection-inner1">
                                            <div className="subsection-content-auto left-content">
                                                {/*<div>*/}
                                                    <div className="content-columns drop-in-allowed" style={{
                                                        transitionDelay: '0s',
                                                    }}>
                                                        <h2>{data.section_2_stat_number1}</h2>
                                                        <span>{data.section_2_stat_title1}</span>
                                                        <div className="underline-deco"/>
                                                    </div>
                                                    <div className="content-columns drop-in-allowed" style={{
                                                        transitionDelay: '0.2s',
                                                    }}>
                                                        <h2>{data.section_2_stat_number2}</h2>
                                                        <span>{data.section_2_stat_title2}</span>
                                                        <div className="underline-deco"/>
                                                    </div>
                                                {/*</div>*/}
                                                {/*<div>*/}
                                                    <div className="content-columns drop-in-allowed" style={{
                                                        transitionDelay: '0.4s',
                                                    }}>
                                                        <h2>{data.section_2_stat_number3}</h2>
                                                        <span>{data.section_2_stat_title3}</span>
                                                        <div className="underline-deco"/>
                                                    </div>
                                                    <div className="content-columns drop-in-allowed" style={{
                                                        transitionDelay: '0.6s',
                                                    }}>
                                                        <h2>{data.section_2_stat_number4}</h2>
                                                        <span>{data.section_2_stat_title4}</span>
                                                        <div className="underline-deco"/>
                                                    </div>
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="main-subsection1 fade-in-allowed" style={{
                                        backgroundImage: `url(${data.section_3_picture})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "100vw auto"
                                    }}>
                                        <div className="subsection-inner-grid" >
                                            <div className="subsection-content-two left-content">
                                                <div className={"title-num"}>
                                                    <div className="line-through"></div>
                                                    <span className="">03</span>
                                                </div>
                                                <div className="">
                                                    <h2 style={{
                                                        textAlign:"left"
                                                    }}>{data.section_3_heading1}</h2>
                                                </div>
                                            </div>
                                            <div className="subsection-content-two right-content fade-in-allowed">
                                                <div>
                                                    <h3>{data.section_3_subheading1}</h3>
                                                    <p>{data.section_3_paragraph1}</p>
                                                    <h3>{data.section_3_subheading2}</h3>
                                                    <p>{data.section_3_paragraph2}</p>
                                                    <div style={ { textAlign:'right', paddingRight:'2rem' }}>
                                                        <a href={Routes.Services} className={"ReadMore"}>Read More</a>
                                                    </div>
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
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps,{getLandingContent})(Main);
