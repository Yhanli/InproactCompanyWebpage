import React, {Component, Fragment} from 'react';
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Alerts extends Component {
    static propTypes= {
        message: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const {alert, message, error} = this.props;
        if (message !== prevProps.message) alert.success(message.addSubscriber);
        if (error !== prevProps.error) alert.error(error.msg.email);
    }

    render() {
        return(
            <Fragment/>
        );
    }
}

const mapStateToProps = state =>({
   message: state.messages,
    error: state.errors
});

export default connect(mapStateToProps) (withAlert()(Alerts))