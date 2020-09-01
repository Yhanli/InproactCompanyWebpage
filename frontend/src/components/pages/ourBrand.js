import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getWebsitePages, getPosts} from "../../actions/frontend";
import {nextSlide, createPostList} from "../../actions/generalActions";

import "./styles/fullLandingImage.css";
import './services.css';
import styles from "./styles/layout-a.module.css";
import "./styles/hoverStyles.css";
import "./styles/generalStyle.css";
import {POSTTYPE, SECTION_NAME} from "../../actions/constants";

import PostPreview from "./pageComponents/postPreview";
import PostModal from "./pageComponents/postModal";


class OurBrand extends Component {
    constructor(props){
        super(props);
        this.state = {
            frontImageChanged:false,
            posts:[],
        };
    }
    static propTypes = {
        maincontent: PropTypes.array.isRequired,
        websitePage: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.props.getWebsitePages();
        getPosts().then(res => {
            this.setState({posts:res.data});
        })
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
        if (this.props.websitePage.loading || content.websitePage.ourbrand === undefined){
            return (<Fragment/>)
        }else{
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
                                        <a onClick={nextSlide(SECTION_NAME.FirstContent)}>{data.ourbrand.button_name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.contentSection}`} id={SECTION_NAME.FirstContent}>
                            <div className={`${styles.contentSectionRow} first-row top-margin-2`}>
                                <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                    <div className="row-max">
                                        <div className={`subsection-text justified-text`}>
                                            <p>{data.ourbrand.paragraph}</p>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_1}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                            {createPostList(POSTTYPE.Featured, this.state.posts, 3).map(post => {
                                                return <PostPreview key={post.id} post={post}/>;
                                            })}
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_2}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                            {createPostList(POSTTYPE.Success, this.state.posts, 3).map(post => {
                                                return <PostPreview key={post.id} post={post}/>;
                                            })}
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_3}</h2>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                            {createPostList(POSTTYPE.Collaboration,this.state.posts,3).map(post => {
                                                return <PostPreview key={post.id} post={post}/>;
                                            })}
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.ourbrand.thread_title_4}</h2>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                            {createPostList(POSTTYPE.Share,this.state.posts,3).map(post => {
                                                return <PostPreview key={post.id} post={post}/>;
                                            })}
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
