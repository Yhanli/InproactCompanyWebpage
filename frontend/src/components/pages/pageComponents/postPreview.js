import React, {Component, Fragment} from 'react';

import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";
import pStyle from "./postPreview.module.css";

class PostPreview extends Component {

    truncateText = (text,size=65) =>{
        return text.slice(0,size) + "..."
    };

    onClick = () =>{
        console.log('Todo')
    };

    render() {
        const post = this.props.post;
        return (
            <Fragment>
                <div className={`${pStyle.postOverAllContainer} bot-margin-2`}
                    onClick={this.onClick}
                >
                    <div className={`${pStyle.postBackGroundContainer}`} style={{
                        backgroundImage: `url(${post.cover_image})`,
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