import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Slick2 from '../component-part/Slick2';
import HomeBlog from '../../Element/HomeBlog';
import {Link} from 'react-router-dom';

const content = [
    {
        title: 'Đặt Homstay không khó nhờ có booking ',
        button: 'Book Now',
        image: require('images/main-slider/slide5.jpg'),
    },
    {
        image: require('images/main-slider/slide1.png'),
    },
    {
        title: '',
        button: 'Discover',
        image: require('images/main-slider/slide3.jpg'),
    },
    {
        title: '',
        button: 'Discover',
        image: require('images/main-slider/slide4.jpg'),
    }
];

// const bg1 = require('../../../images/background/bg1.jpg');

function Homepage2(props) {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // };

    return (
        <div>
            <Slider className="slider-wrapper" infinite autoplay>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        {/*<div className="inner">*/}
                        {/*    <h1>{item.title}</h1>*/}
                        {/*    <p>{item.description}</p>*/}
                        {/*    <Link to={'/place'} className="site-button">Book Now</Link>*/}
                        {/*</div>*/}
                    </div>
                ))}
            </Slider>
            <div className="content-block" id="page_content">
                {/*<Tab2 />*/}

                <div className="section-full bg-white content-inner-2">
                    <div className="container">
                        <div className="section-head style1 text-black text-center">
                            <h2>Popular Destinations</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('../../../images/featured/pic1.jpg')} alt="" />
                                        <div className="featured-tag">5 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Westorn Europe</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('../../../images/featured/pic2.jpg')} alt="" />
                                        <div className="featured-tag">7 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Philippines</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('../../../images/featured/pic3.jpg')} alt="" />
                                        <div className="featured-tag">3 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Friendly Santorini</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('../../../images/featured/pic4.jpg')} alt="" />
                                        <div className="featured-tag">2 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>Australia</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="featured-bx style2">
                                    <div className="featured-media">
                                        <img src={require('../../../images/featured/pic5.jpg')} alt="" />
                                        <div className="featured-tag">6 Days</div>
                                    </div>
                                    <div className="featured-content text-white">
                                        <div>
                                            <h2 className="title"><Link to={'packages'}>South America </Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            <Link to={'packages'} className="site-button outline white">View All Tours</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Slick2 />
                <HomeBlog />




            </div>

            {/*<Footer />*/}
        </div>
    )

}
export default Homepage2;