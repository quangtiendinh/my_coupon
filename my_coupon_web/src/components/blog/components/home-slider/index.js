import React from "react";
import './index.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom";
import CarouselSlider from "../carousel-slider";

export default class HomeSlider extends React.Component {
    render() {
        return (
            <section className="home-slider">
                <div className="container">
                    <div className="row">
                        <div className="sliders-widget col-md-9">
                            <CarouselSlider autoPlay={true} infiniteLoop={true} showThumbs={false}  />
                        </div>
                        {/*sliders-widget*/}
                        <div className="banner-widget col-md-3">
                            <div className="banner-box">
                                <Link to="" className="item">
                                    <img src="https://cdn.chanhtuoi.com/uploads/2020/02/phong-covid-19.png" alt="aa" className="img"/>
                                </Link>
                            </div>
                            {/*banner-box*/}
                            <div className="banner-box">
                                <Link to="" className="item">
                                    <img src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="aa" className="img"/>
                                </Link>
                            </div>
                            {/*banner-box*/}
                        </div>
                        {/*banner-widget*/}
                    </div>
                    {/*row*/}
                </div>
                {/*container*/}
            </section>
            // home-slider
        );
    }
}
