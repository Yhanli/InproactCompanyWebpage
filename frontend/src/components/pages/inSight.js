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


class InSight extends Component {
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
        if (this.props.websitePage.loading || content.websitePage.insight === undefined){
            return (<Fragment/>)
        }else{
            const data = content.websitePage;
            return (
                <Fragment>
                    <div className="main-containers" value={this.props.maincontent[0]? document.title = `${data.insight.page_name} - ${this.props.maincontent[0].site_name}` : ''}>
                        <div className="section1">
                            <div className="front-image">
                                <img src={data.insight.cover_image}/>
                                <div className="front-image-name-no-frame">
                                    <div style={{
                                        height:"3rem",
                                    }}></div>
                                    <p>

                                        <a className={`no-frame-title`}
                                           onClick={nextSlide(SECTION_NAME.FirstContent)} dangerouslySetInnerHTML={{__html:data.insight.button_name}}
                                           style={{
                                               fontFamily:"Cabin Sketch",
                                               fontSize:"4vw",
                                               color:"white"
                                           }}>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.contentSection}`} id={SECTION_NAME.FirstContent}>
                            <div className={`${styles.contentSectionRow} first-row top-margin-2`}>
                                <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <p className={`quote_p`}>{data.insight.quote} <br/><span
                                                className={`quote_by`}
                                                style={{
                                                whiteSpace: 'nowrap'
                                            }}>{`-${data.insight.quote_by}`}</span></p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text justified-text`}>
                                            <p>{data.insight.paragraph}</p>
                                            <p>{data.insight.paragraph_2}</p>
                                        </div>
                                    </div>
                                    <div className="row-max">
                                        <div className={`align-centre subsection-text`}>
                                            <h2>{data.insight.thread_title}</h2>
                                        </div>
                                    </div>

                                    <div className="row-max">
                                        <div className={`${styles.headBoxContainer} flex-wrap-normal`}>
                                            {createPostList(POSTTYPE.Educational, this.state.posts).map(post => {
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

export default connect(mapStateToProps,{getWebsitePages})(InSight);
