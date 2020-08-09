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

                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.cover_image}/>

                                    </div>
                                </div>
                                <div className="main-section2" id="section2">
                                    <div className="main-subsection1">
                                        <div className="subsection-inner1">
                                            <div className="subsection-content left-content">
                                                <h2>{data.section_1_heading1}</h2>
                                                <p>{data.section_1_paragraph1}</p>
                                            </div>
                                            <div className="subsection-content left-content">
                                                <img src={`${data.section_1_picture}`}/>
                                            </div>
                                            <div className="subsection-content left-content">
                                                <h2>{data.section_1_heading2}</h2>
                                                <p>{data.section_1_paragraph2}</p>
                                            </div>
                                        </div>
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
