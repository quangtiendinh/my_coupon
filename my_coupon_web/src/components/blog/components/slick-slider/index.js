import React from "react";
import './index.scss';
import Slider from 'react-slick';
import {Link} from "react-router-dom";

export default class SlickSlider extends React.Component {

    constructor() {
        super();

    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <Slider {...settings}>
                <div className="slide-item">
                    <Link to="/">
                        <img src="https://salt.tikicdn.com/ts/category/94/6a/42/3b262c87f2fd104b7cb50f38aef43e18.png" alt=""/>
                    </Link>
                </div>
            </Slider>

        )
    }
}
