import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getWebsitePages, getPosts} from "../../actions/frontend";

import "./styles/fullLandingImage.css";
import './services.css';
import styles from "./styles/layout-a.module.css";
import "./styles/hoverStyles.css";
// import "./styles/buttons.css";
import "./styles/generalStyle.css";
import smoothscroll from "smoothscroll-polyfill";
import {Time_Out,POSTTYPE} from "../../actions/constants";
import {MOUSE_CLICK, AUTO} from "../../actions/types";

import PostPreview from "./pageComponents/postPreview";


class OurBrand extends Component {
    state = {
        frontImageChanged:false,
        posts:[]
    };
    static propTypes = {
        maincontent: PropTypes.array.isRequired,
        websitePage: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.props.getWebsitePages();
        window.onload = setTimeout(
            this.nextSlide(AUTO),
            Time_Out.timeToContent)
        getPosts().then(res => {
            this.setState({posts:res.data});
            console.log(res.data)
        })
    }


    nextSlide = (actionType=AUTO) => () => {
        if (window.pageYOffset !== 0 && actionType === AUTO) return;
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

    createPostList = (type,num=3) => {
        return this.state.posts.filter(post => post.post_type === type).slice(0,num)
    };

    render() {
        const content = this.props.websitePage;
        if (this.props.websitePage.loading || content.websitePage.services == undefined){
            return (<Fragment/>)
        }else{
            window.onload = setTimeout(
                this.nextSlide,
                Time_Out.timeToContent)
            const data = content.websitePage;
            return (
                <Fragment>

                    <div className="main-containers" value={this.props.maincontent[0]? document.title = `${data.ourbrand.page_name} - ${this.props.maincontent[0].site_name}` : ''}>
                        <div className="section1">
                            <div className="front-image">
                                <img src={data.ourbrand.cover_image}/>
                                <div className="front-image-name">
                                    <p>
                                        <span onMouseEnter={this.fadeInAnimate} className="front-image-header">IN-Hub</span>
                                        <br/>
                                        <a onClick={this.nextSlide(MOUSE_CLICK)}>{data.ourbrand.button_name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.contentSection}`} id="content-section">
                            <div className={`${styles.contentSectionRow} first-row top-margin-2`}>
                                <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <p>{data.ourbrand.section_1_content_paragraph}</p>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_1}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        {this.createPostList(POSTTYPE.Featured,3).map(post => {
                                            return <PostPreview key={post.id} post={post}/>;
                                        })}
                                    </div>

                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_2}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                    </div>

                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_3}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_4}</h2>
                                        </div>
                                    </div>

                                </div>

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

export default connect(mapStateToProps,{getWebsitePages})(OurBrand);
