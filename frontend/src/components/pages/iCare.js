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


class ICare extends Component {
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
        getPosts().then(res => {
            this.setState({posts:res.data});
        })
    }

    render() {
        const content = this.props.websitePage;
        if (this.props.websitePage.loading || content.websitePage.icare === undefined){
            return (<Fragment/>)
        }else{
            const data = content.websitePage;
            return (
                <Fragment>
                    <div className="main-containers" value={this.props.maincontent[0]? document.title = `${data.icare.page_name} - ${this.props.maincontent[0].site_name}` : ''}>
                        <div className="section1">
                            <div className="front-image">
                                <img src={data.icare.cover_image}/>
                                <div className="front-image-name-no-frame"
                                    style={{
                                        left:"35%",
                                        top:"60%"
                                    }}
                                >
                                    <p>
                                        <a className={`no-frame-title`}
                                           onClick={nextSlide(SECTION_NAME.FirstContent)}
                                           style={{
                                               whiteSpace:"pre-wrap",
                                               padding:'0'
                                           }}>
                                        {data.icare.button_name}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.contentSection}`} id={SECTION_NAME.FirstContent}>
                            <div className={`${styles.contentSectionRow} first-row top-margin-2`}>
                                <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                    <div className={`row-max ${styles.headBoxContainer} flex-wrap-normal`}>
                                        <div className={`${styles.rightContainer} subsection-text justified-text`}>
                                            <h2>{data.icare.heading}</h2>
                                            <p>{data.icare.left_paragraph}</p>
                                        </div>
                                        <div className={`${styles.leftContainer} subsection-text justified-text`} >
                                            <br />
                                            <br />
                                            <p>{data.icare.right_paragraph}</p>
                                            <p>{data.icare.right_paragraph_2}</p>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.icare.thread_title}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                            {createPostList(POSTTYPE.Business, this.state.posts).map(post => {
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

export default connect(mapStateToProps,{getWebsitePages})(ICare);
