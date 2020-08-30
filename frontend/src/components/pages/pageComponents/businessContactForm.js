import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addQuery} from "../../../actions/query";

import "./../styles/hoverStyles.css";
import "./../styles/generalStyle.css";
import "./form.css";

class BusinessContactForm extends Component {
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
    tickboxOnChange = e => {
        if (e.target.checked){
            this.setState({
                checked_content: this.state.checked_content + `- ${e.target.value}\n`
            })
        }else{
            this.setState({
                checked_content: this.state.checked_content.replace(`- ${e.target.value}\n`, "")
            })
        }
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
            query_type:'ind'
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
        // console.log(this.props.websitePage.websitePage.contact.tickboxs);
        const tickboxs = this.props.websitePage.websitePage.contact.tickboxs;
        return (
            <Fragment>
                {/*initial Contact Form*/}
                <form onSubmit={this.onSubmit} className={`form-body`}>
                    <div className="half-form">
                        <input
                            className="form-control"
                            type="text"
                            name="company_name"
                            placeholder={"Company Name:"}
                            onChange={this.onChange}
                            value={company_name}
                        />
                    </div>
                    <div className="half-form">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder={"Contact Person:"}
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="half-form">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder={"Contact Email:"}
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="half-form">
                        <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder={"Contact Phone:"}
                            onChange={this.onChange}
                            value={phone}
                        />
                    </div>

                    <div className="full-form">
                        {/*<label>Message</label>*/}
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            placeholder={"Brief Message*"}
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    {tickboxs.map(tickbox=>{
                        if (tickbox.business_use){
                        return(
                            <div className="half-form tickbox-left" key={tickbox.id}>

                                <label htmlFor={`${tickbox.id}_bus`}>
                                    <input type="checkbox" id={`${tickbox.id}_bus`} value={tickbox.question}
                                        onChange={this.tickboxOnChange}
                                    />
                                    &nbsp;
                                    {tickbox.question}
                                </label>
                            </div>
                        )
                    }
                    })}
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

export default connect(mapStateToProps,{addQuery})(BusinessContactForm);