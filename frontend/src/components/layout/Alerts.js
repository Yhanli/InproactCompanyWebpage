import React, {Component, Fragment} from 'react';
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Alerts extends Component {
    static propTypes= {
        messages: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const {alert, messages, error} = this.props;
        if (messages !== prevProps.messages) {
            if (messages.addSubscriber) alert.success(messages.addSubscriber);
            if (messages.addQuery) alert.success(messages.addQuery);

        };
        if (error !== prevProps.error) {
            if (error.msg.email) alert.error(error.msg.email);
            if (error.msg.message)alert.error(error.msg.message)};
    }

    render() {
        return(
            <Fragment/>
        );
    }
}

const mapStateToProps = state =>({
   messages: state.messages,
    error: state.errors
});

export default connect(mapStateToProps) (withAlert()(Alerts))