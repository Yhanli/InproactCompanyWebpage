import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs, getLandingContent} from "../../actions/frontend";

import "./pages.css";



class Main extends Component {

    static propTypes = {
        maincontent:PropTypes.array.isRequired
    };
    nextSlide = () => {
        const height = document.getElementById("section2").offsetHeight;
        document.querySelector('html').scrollTo(0, height - 75);
    };
    render() {
        return (
            <Fragment>
                {this.props.maincontent[0]? document.title = `Home - ${this.props.maincontent[0].site_name}` : ''}
                {this.props.maincontent.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-container">
                                <div className="container-fluid section1">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            {data.landing_images.map(imgs=>{
                                                return(
                                                    <div className={`carousel-item ${imgs.id===data.landing_images[0].id?'active':""}`} key={imgs.id}>
                                                        <img src={imgs.picture} className="corousel-img d-block w-100" alt="..."/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                           data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                           data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="container-fluid section2" id="section2">
                                    <div id={`subsection1`} className="subsection1">
                                        <div><p>testing sub</p></div>
                                        <div><p>testing sub</p></div>
                                        <div><p>testing sub</p></div>
                                        <span className={"subsection-heading"}>What we do...</span>
                                    </div>
                                    <div id={`subsection2`}>
                                        <p>testing</p>
                                    </div>
                                    <div id={`subsections3`}>
                                        <p>testing</p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </Fragment>
        )
    }
}

const mapStateToProps = state=> ({
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps,{getLandingContent})(Main);
