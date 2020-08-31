import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";
import pStyle from "./postPreview.module.css";
import "./modal.css";
import PostModal from "./postModal";

class PostPreview extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        };
    }
    truncateText = (text,size=65) =>{
        return text.slice(0,size) + "..."
    };

    showModalAction = () =>{
        const element = document.getElementById(`post-modal-${this.props.post.id}`);
        const element_content = document.getElementById(`post-modal-${this.props.post.id}-content`);

        if (!this.state.showModal) {
            element_content.classList.add("modal-active-content");
            element.classList.add("modal-active");}
        else {
            element_content.classList.remove("modal-active-content");
            element.classList.remove("modal-active");}

        this.setState({showModal: !this.state.showModal});

    };


    render() {
        const post = this.props.post;
        return (
            <Fragment>
                <div className={`modal-bg`} id={`post-modal-${post.id}`}
                    onClick={this.showModalAction}
                >
                </div>
                <div className={`modal-bg-content`} id={`post-modal-${post.id}-content`}>
                        {/*<div className="close-modal" onClick={this.showModalAction}>*/}
                        {/*    <div className={`X-left x-close`}></div>*/}
                        {/*    <div className={`X-right x-close`}></div>*/}
                        {/*</div>*/}
                    <div className={`modal-content`} >
                        <div>
                            <img className={`modal-image`} src={post.cover_image}/>
                        </div>
                        <div className={`subsection-text top-space-2 justified-text`}>
                            <h2 className={`text-center`}>{post.title}</h2>
                            <p>{post.content}</p>
                            <div className={`gold-divider-sm-md bot-margin-2 top-margin-2`}/>
                            <p style={{
                                color: "black"
                            }}>{post.end_note}</p>
                            <p className={`text-left-align text-italic`}>{post.disclaimer}</p>
                            <p className={`text-right-align text-italic`}>{post.created_at}</p>
                        </div>
                    </div>
                </div>

                <div className={`${pStyle.postOverAllContainer} bot-margin-2 `}
                    onClick={this.showModalAction}
                >
                    <div className={`${pStyle.postBackGroundContainer}`} style={{
                        backgroundImage: `url(${post.cover_image})`,
                        backgroundSize: 'cover'
                    }}>
                        <div className={`${pStyle.postBackGroundContainer}`} >
                        </div>
                    </div>
                    <div className={`${pStyle.textContentContainer} text-left-align`}>
                        <h2 className={`${pStyle.subHeading}`}>{post.title}</h2>
                        <p className={`${pStyle.subText}`}>{this.truncateText(post.content)}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PostPreview;