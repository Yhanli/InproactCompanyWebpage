import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs, getLandingContent} from "../../actions/frontend";

import "./main.css";



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
                {this.props.maincontent.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-containers" value={this.props.maincontent[0]? document.title = `Home - ${this.props.maincontent[0].site_name}` : ''}>
                                {/*<div className="main-section">*/}
                                {/*    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">*/}
                                {/*        <div className="carousel-inner">*/}
                                {/*            {data.landing_images.map(imgs=>{*/}
                                {/*                return(*/}
                                {/*                    <div className={`carousel-item ${imgs.id===data.landing_images[0].id?'active':""}`} key={imgs.id}>*/}
                                {/*                        <img src={imgs.picture} className="corousel-img d-block w-100" alt="..."/>*/}
                                {/*                    </div>*/}
                                {/*                )*/}
                                {/*            })}*/}
                                {/*        </div>*/}
                                {/*        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"*/}
                                {/*           data-slide="prev">*/}
                                {/*            <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                                {/*            <span className="sr-only">Previous</span>*/}
                                {/*        </a>*/}
                                {/*        <a className="carousel-control-next" href="#carouselExampleControls" role="button"*/}
                                {/*           data-slide="next">*/}
                                {/*            <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                                {/*            <span className="sr-only">Next</span>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.cover_image}/>

                                    </div>
                                </div>
                                <div className="container-fluid section2" id="section2">

                                    <div id={`subsections3`}>
                                        {/*<p>testing</p>*/}
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
