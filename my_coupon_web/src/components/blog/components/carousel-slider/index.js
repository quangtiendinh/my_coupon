import React from "react";
import './index.scss';
import {Link} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";

export default class CarouselSlider extends React.Component {
    render() {
        return (
            <Carousel autoPlay={this.props.autoPlay} infiniteLoop={this.props.infiniteLoop} showThumbs={this.props.showThumbs}>
                <div className="item active">
                    <Link to="/">
                        <img src="https://salt.tikicdn.com/cache/w885/ts/banner/e8/e5/36/0419895e3b41b57d8d133372621a76ba.jpg" alt="Chania"/>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/">
                        <img src="https://salt.tikicdn.com/desktop/img/category-default-banner.png" alt="Chania"/>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/">
                        <img src="https://salt.tikicdn.com/cache/w885/ts/banner/76/98/7a/bf67edafae6572c607c1bfd82e3ce356.jpg" alt="Chania"/>
                    </Link>

                </div>
            </Carousel>
        )
    }
}
