import React, {Component, Fragment} from 'react';

import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";
import "./modal.css";

class PostModal extends Component {

    closeModal = () => {
        this.props.toggleModal();
    };

    render() {
        return (
            <Fragment>
                <div className={`modal-bg`}>
                    <div className={`modal-content`}></div>

                </div>

            </Fragment>
        )
    }
}


export default PostModal;