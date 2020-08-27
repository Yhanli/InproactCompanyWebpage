import React, {Component, Fragment} from 'react';

import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";

class PostPreview extends Component {
    render() {
        return (
            <Fragment>
                <h1>{this.props.post.title}</h1>
            </Fragment>
        )
    }
}

export default PostPreview;