import React from "react";
import './index.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom";
import CarouselSlider from "../carousel-slider";
import Sidebar from "../sidebar";

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
                        <Sidebar/>
                    </div>
                    {/*row*/}
                </div>
                {/*container*/}
            </section>
            // home-slider
        );
    }
}
