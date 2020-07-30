import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import "./pages.css";



class Main extends Component {


    nextSlide = (event) => {
        const height = document.getElementById("section2").offsetHeight;
        document.querySelector('html').scrollTo(0, height - 75);
    };

    render() {
        return (
            <Fragment>
                <div>

                    <div className="container-fluid section1">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="http://inproact.theia.nz/wp-content/uploads/2020/07/Inproact-website-re-21.jpg" className="corousel-img d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="http://inproact.theia.nz/wp-content/uploads/2020/07/Inproact-website-re-22.jpg" className="corousel-img d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="http://inproact.theia.nz/wp-content/uploads/2020/07/Inproact-website-re-22.jpg" className="corousel-img d-block w-100" alt="..."/>
                                </div>
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
                        {/*<button className="btn btn-primary test"*/}
                        {/*onClick={this.nextSlide}*/}
                        {/*> that do you mean </button>*/}
                    </div>

                    <div className="container-fluid section2" id="section2">

                    </div>

                </div>

            </Fragment>
        )
    }
}



export default Main;