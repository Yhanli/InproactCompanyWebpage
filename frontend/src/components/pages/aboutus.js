import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAboutUs,getLandingContent} from "../../actions/frontend";

import "./aboutus.css";

class AboutUs extends Component {

    static propTypes = {
        aboutus:PropTypes.array.isRequired,
        maincontent: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getAboutUs();
        this.props.getLandingContent();
    }

    nextSlide = () => {
        const element = document.getElementById("content-section");
        element.scrollIntoView({behavior: "smooth", inline:"start"});
    };

    render() {
        const styles = {
            header: {
                backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiF7nMwP-MSiNmsbbf2kDneK_bLQ8SidSRfl-Hezb5WEFlcfx)',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },

            content: {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                color: 'white'
            }
        }

        return (
            <Fragment>
                {/*{console.log(this.props.aboutus)}*/}
                {this.props.maincontent[0]? document.title = `About Us - ${this.props.maincontent[0].site_name}` : ''}
                {this.props.aboutus.slice(0).map(data=>{
                    return(
                        <Fragment key={data.id}>
                            <div className="main-container">
                                <div className="section1">
                                    <div className="front-image">
                                        <img src={data.cover_image}/>
                                        <div className="front-image-name">
                                                <span>ABOUT US</span>
                                                <section className="text-liner" />
                                                <a onClick={this.nextSlide}>INPG</a>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="content-section" id="content-section" style={{
                                        backgroundImage: `url(${data.light_background_image})`,
                                        height: '100%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        paddingTop: "3em"
                                    }}>
                                        <div><br/><br/></div>
                                        <div id={`subsection1`} className="subsection">

                                            <div className="subsection-text">
                                                <h2 className="first-text">{data.section1_title}</h2>
                                                <p>{data.section1_paragraph}</p>
                                                <p className="famous-quote"><span className="quote">{data.famous_quote.split("–")[0]}</span> - <span className="quote-by">{data.famous_quote.split("–")[1]}</span></p>
                                            </div>


                                            <div className="row-column">
                                                <div className="subsection-text">
                                                    <h2>{data.section2_title}</h2>
                                                    <p>{data.section2_paragraph}</p>
                                                </div>
                                                <div></div>
                                                {/*<div></div>*/}

                                            </div>

                                            <div className="row-column">
                                                {/*<div></div>*/}
                                                <div></div>
                                                <div className="subsection-text">
                                                    <h2>{data.section3_title}</h2>
                                                    <p>{data.section3_paragraph}</p>
                                                </div>
                                            </div>
                                            <div className="row-column" style={{
                                                paddingBottom:"5vw"
                                            }}>
                                                <div className="subsection-text">
                                                    <h2 style={{
                                                        paddingBottom:"-50px"
                                                    }}>{data.section4_title}</h2>
                                                    {data.section4_paragraph ? <p>{data.section4_paragraph}</p>:""}
                                                    <p>{data.section4_paragraph}</p>
                                                    <img src={data.section4_image}
                                                         className="aboutus-img" alt="inspire"/>
                                                </div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            {/*<div className="subsection-img">*/}
                                            {/*    <img src={data.section4_image}*/}
                                            {/*         className="inspire-photo" alt="inspire"/>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <br />
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
    aboutus:state.aboutus.aboutus,
    maincontent:state.maincontent.maincontent
});

export default connect(mapStateToProps,{getAboutUs,getLandingContent})(AboutUs);

// export default AboutUs;

