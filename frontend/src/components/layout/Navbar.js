import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAboutUs, getLandingContent} from "../../actions/frontend";


import './navbar.css';

class Navbar extends Component {

    static propTypes = {
        maincontent: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getLandingContent();
        // const favicon = document.getElementById("favicon");
        // favicon.href = "http://inproact.theia.nz/wp-content/uploads/2018/03/favicon.ico";
        // console.log(this.props.maincontent)
    }

    state = {
        current: '',
        dropdown: false,
        burger: false
    };

    _onMouseEnter = (event) => {
        const dropdown_name = event.target.name;
        this.setState({dropdown:true});
    };
    
    _onMouseLeave = (event) => {
        this.setState({dropdown:false});
    };

    navSlide = () => {
        const navLinks = document.querySelectorAll(".nav-links li");
        this.setState(
            { burger:!this.state.burger }
        );
        navLinks.forEach((link,index) => {

            if (link.style.animation){
                link.style.animation = ""
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                }
            }

        )
    };

    setActiveTab = (event,tab) => {
        console.log(tab);
    };

    render() {
        const {current} = this.state;
        // console.log(this.props.maincontent[0]);
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img className="logo horizontal-logo"
                                 width="70" height="70"
                                 src={this.props.maincontent.map(maincontent => (
                                     maincontent.logo
                                 ))}
                                 alt="logo"/>
                        </a>
                        <button className={`navbar-toggler ${this.state.burger ? "toggle" : ""}`}
                                type="button" data-toggle="collapse"
                                onClick={this.navSlide}
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                    <div className="line3"></div>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item dropdown ${this.state.dropdown ? 'show' : '' }
                                                ${this.state.current === "aboutus" ? 'active-tab' : ""}
                                                `}
                                    onMouseEnter={this._onMouseEnter}
                                    onMouseLeave={this._onMouseLeave}
                                    ref="dropdown1"
                                >
                                    <a className="nav-link dropdown-toggle" href="/aboutus" id="navbarDropdown2" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" name="dropdown1"
                                       aria-expanded={`${this.state.dropdown ? 'true' : 'false' }`}>
                                        About Us
                                    </a>
                                    <div className={`dropdown-menu ${this.state.dropdown ? 'show' : '' }`}
                                         aria-labelledby="navbarDropdown2" id="dropitems1">
                                        <a className="dropdown-item" href="/aboutus">INPG</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/story">INPG Story</a>
                                        <a className="dropdown-item" href="#">INPG Team</a>
                                        <a className="dropdown-item" href="#">INPG Why Us</a>
                                    </div>
                                </li>
                                <li className={`nav-item ${this.state.current === "service" ? 'active-tab' : ""}`}
                                    onClick={this.setActiveTab.bind('service')}
                                >
                                    <a className="nav-link" href="#">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">IN-Hub</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">IN-Sights</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">i-CARE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
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
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps,{getLandingContent})(Navbar);