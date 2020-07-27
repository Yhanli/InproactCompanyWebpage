import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAboutUs} from "../../actions/aboutus";


import './navbar.css';

class Navbar extends Component {

    static  propTypes = {
        aboutus: PropTypes.array.isRequired
    };


    componentDidMount() {
        this.props.getAboutUs();
    }

    state = {
        current: 'mail',
        dropdown: ''
    };

    _onMouseEnter = (event) => {
        // const width = this.refs.dropdown_first.clientWidth;
        // const height = this.refs.dropdown_first.clientHeight;
        // console.log(event.target.drops)
        // this.refs.dropdown_first.classList
        const dropdown_name = event.target.name;
        this.setState({dropdown:event.target.name});
        console.log(event.target.name);


    };
    
    _onMouseLeave = (event) => {
        this.setState({dropdown:''});
    };



    render() {
        const {current} = this.state;
        console.log(this.props.aboutus[0]);
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="logo horizontal-logo"
                                 width="80" height="80"
                                 src={this.props.aboutus.map(aboutus => (
                                     aboutus.logo
                                 ))}
                                 alt="forecastr logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">

                                <li className={`nav-item dropdown ${this.state.dropdown.includes('dropdown1') ? 'show' : '' }`}
                                    onMouseEnter={this._onMouseEnter}
                                    onMouseLeave={this._onMouseLeave}
                                    ref="dropdown1"
                                >
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" name="dropdown1"
                                       aria-expanded={`${this.state.dropdown.includes('dropdown1') ? 'true' : 'false' }`}>
                                        About Us
                                    </a>
                                    <div className={`dropdown-menu ${this.state.dropdown.includes('dropdown1') ? 'show' : '' }`}
                                         aria-labelledby="navbarDropdown2" id="dropitems1">
                                        <a className="dropdown-item" href="#">INPG</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">INPG Story</a>
                                        <a className="dropdown-item" href="#">INPG Team</a>
                                        <a className="dropdown-item" href="#">INPG Why Us</a>

                                        {/*<div className="dropdown-divider"></div>*/}
                                        {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>

                                {/*<li className={`nav-item dropdown ${this.state.dropdown.includes('dropdown2') ? 'show' : '' }`}*/}
                                {/*    onMouseEnter={this._onMouseEnter}*/}
                                {/*    onMouseLeave={this._onMouseLeave}*/}
                                {/*>*/}
                                {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"*/}
                                {/*       data-toggle="dropdown" aria-haspopup="true" name="dropdown2"*/}
                                {/*       aria-expanded={`${this.state.dropdown.includes('dropdown2') ? 'true' : 'false' }`}>*/}
                                {/*        Dropdown*/}
                                {/*    </a>*/}
                                {/*    <div className={`dropdown-menu ${this.state.dropdown.includes('dropdown2') ? 'show' : '' }`}*/}
                                {/*         aria-labelledby="navbarDropdown3">*/}
                                {/*        <a className="dropdown-item" href="#">Action</a>*/}
                                {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                                {/*        <div className="dropdown-divider"></div>*/}
                                {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

const mapStateToProps = state=> ({
   aboutus:state.aboutus.aboutus
});

export default connect(mapStateToProps,{getAboutUs})(Navbar);