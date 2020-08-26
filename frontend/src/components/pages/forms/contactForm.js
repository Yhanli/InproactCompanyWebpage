import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addQuery} from "../../../actions/query";


import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";
import "./form.css";

class ContactForm extends Component {
    state = {
        company_name:"",
        name:"",
        email:"",
        phone:"",
        message:"",
        subject:"",
        preferred_contact:"",
        checked_content: ""
    };
    static propTypes = {
        maincontent: PropTypes.array.isRequired,
        websitePage: PropTypes.object.isRequired,
        addQuery: PropTypes.func.isRequired
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        const {company_name, name,email,phone,message,checked_content,subject,preferred_contact} = this.state;
        const query = {
            company_name,
            name,
            email,
            phone,
            message,
            checked_content,
            subject,
            preferred_contact,
            query_type:'cont'
        };
        this.props.addQuery(query);
        this.setState({
            company_name:"",
            name:"",
            email:"",
            phone:"",
            message:"",
            checked_content: "",
            preferred_contact:"",
            subject:""
        })
    };

    render() {
        const {company_name, name,email,phone,message,checked_content,subject,preferred_contact} = this.state;
            return (
                <Fragment>
                    {/*initial Contact Form*/}
                    <form onSubmit={this.onSubmit} className={`form-body`}>
                        <div className="half-form">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder={"Your Full Name*"}
                                onChange={this.onChange}
                                value={name}
                            />
                        </div>
                        <div className="half-form">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder={"Your Email"}
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className="half-form">
                            <input
                                className="form-control"
                                type="text"
                                name="phone"
                                placeholder={"Your Contact Phone Number*"}
                                onChange={this.onChange}
                                value={phone}
                            />
                        </div>
                        <div className="half-form">
                            <input
                                className="form-control"
                                type="text"
                                name="preferred_contact"
                                placeholder={"Your Preferred Contact Detail*"}
                                onChange={this.onChange}
                                value={preferred_contact}
                            />
                        </div>
                        <div className="full-form">
                            <input
                                className="form-control"
                                type="text"
                                name="subject"
                                placeholder={"Subject"}
                                onChange={this.onChange}
                                value={subject}
                            />
                        </div>
                        <div className="full-form">
                            {/*<label>Message</label>*/}
                            <textarea
                                className="form-control"
                                type="text"
                                name="message"
                                placeholder={"Your Message*"}
                                onChange={this.onChange}
                                value={message}
                            />
                        </div>
                        <div className="full-form submit-button">
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </Fragment>

            )
        }
}

const mapStateToProps = state=> {
    return{
        maincontent:state.maincontent.maincontent,
        websitePage:state.websitePage
    }
};

export default connect(mapStateToProps,{addQuery})(ContactForm);