import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAboutUs, getLandingContent} from "../../actions/frontend";
import {NavLink} from "react-router-dom";

import './navbar.css';

class Navbar extends Component {
    state = {
        dropdown: false,
        burger: false
    };

    static propTypes = {
        maincontent: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {

        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        // console.log(`${currentScrollPos} - ${prevScrollpos}`);
        const visible = prevScrollpos > currentScrollPos;
        if (!visible && this.state.burger){
            console.log("close burger");
            document.getElementById("myBtn").click()
            this.setState({dropdown:false});
        }
        if (currentScrollPos > 50){
            this.setState({
                prevScrollpos: currentScrollPos,
                visible
            });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.props.getLandingContent();
        // const favicon = document.getElementById("favicon");
        // favicon.href = "http://inproact.theia.nz/wp-content/uploads/2018/03/favicon.ico";
        // console.log(this.props.maincontent)
    }



    _onMouseEnter = (event) => {
        const dropdown_name = event.target.name;
        this.setState({dropdown:true});
    };
    
    _onMouseLeave = (event) => {
        this.setState({dropdown:false});
    };

    _navcollapse = () => {
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




    render() {
        // const {current} = this.state;
        // console.log(this.props.currentTab);
        return (
            <Fragment>
                <nav className={`navbar navbar-expand-md ${!this.state.visible? "navbar--hidden":""}`}>
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
                                id="myBtn"
                                type="button" data-toggle="collapse"
                                onClick={this._navcollapse}
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                    <div className="line3"></div>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item dropdown ${this.state.dropdown ? 'show' : '' }`}
                                    onMouseEnter={this._onMouseEnter}
                                    onMouseLeave={this._onMouseLeave}
                                    ref="dropdown1"
                                >
                                    <a className="nav-link dropdown-toggle" href="/aboutus" id="navbarDropdown2" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" name="dropdown1"
                                       aria-expanded={`${this.state.dropdown ? 'true' : 'false' }`}
                                    >
                                        About Us
                                    </a>
                                    <div className={`dropdown-menu ${this.state.dropdown ? 'show' : '' }`}
                                         aria-labelledby="navbarDropdown2" id="dropitems1">
                                        <NavLink exact className="dropdown-item-" activeClassName="active-tab" to="/aboutus" >
                                            <span>INPG</span>
                                        </NavLink>

                                        <div className="dropdown-divider"></div>
                                        <NavLink exact className="dropdown-item-" activeClassName="active-tab" to="/story" >
                                            <span>INPG Story</span>
                                        </NavLink>
                                        <NavLink exact className="dropdown-item-" activeClassName="active-tab" to="/team" >
                                            <span>INPG Team</span>
                                        </NavLink>
                                        <NavLink exact className="dropdown-item-" activeClassName="active-tab" to="/whyus" >
                                            <span>INPG Why Us</span>
                                        </NavLink>
                                    </div>
                                </li>


                                <li className="nav-item">
                                    <NavLink exact className="nav-link" activeClassName="active-tab" to="/services" >
                                        <span>Service</span>
                                    </NavLink>
                                </li>



                                <li className={`nav-item ${this.state.currentTab === "inhub" ? 'active-tab' : ""}`}>
                                    <a className="nav-link" href="#">IN-Hub</a>
                                </li>
                                <li className={`nav-item ${this.state.currentTab === "insight" ? 'active-tab' : ""}`}>
                                    <a className="nav-link" href="#">IN-Sights</a>
                                </li>
                                <li className={`nav-item ${this.state.currentTab === "icare" ? 'active-tab' : ""}`}>
                                    <a className="nav-link" href="#">i-CARE</a>
                                </li>
                                <li className={`nav-item ${this.state.currentTab === "contact" ? 'active-tab' : ""}`}>
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