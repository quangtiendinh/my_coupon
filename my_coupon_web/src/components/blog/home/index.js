import React from "react";
import './index.scss';
import {Link} from "react-router-dom";
import HomeSlider from "../components/home-slider";
import Card from "../components/card";
import Sidebar from "../components/sidebar";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faTimes} from "@fortawesome/free-solid-svg-icons";
import ReadMore from "../components/read-more";
import SlickSlider from "../components/slick-slider";

export default class Home extends React.Component{
    render() {
        return (
            <main id="main-wrapper">
                <section className="banner-widget full-banner">

                </section>
                {/*banner-widget*/}

                <HomeSlider/>

                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="widget-content content list-item list-provider col-md-12">
                                <div className="widget-header">
                                    <h3 className="text-header">
                                        <Link to=""><span>Mã giảm giá</span></Link>
                                    </h3>
                                </div>
                                <div className="widget-body">
                                    <div className="row temporary">
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/ma-giam-gia-tiki-small.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/lazada-app-icon-small.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/1200px-shopee-logo-svg-small.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/fpt-small.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/ma-giam-gia-tiki-small.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/03/ma-giam-gia-fado-01-small.jpg"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/ma-giam-gia-agoda-khuyen-mai-cover-1-small.png"/>
                                        <Card src="https://magiamgia.com/wp-content/uploads/2019/03/ma-giam-gia-lotte-khuyen-mai-233x210.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/ma-giam-gia-tiki-small.png"/>
                                        <Card src="https://cdn.chanhtuoi.com/uploads/2020/02/1200px-shopee-logo-svg-small.png"/>
                                    </div>
                                </div>
                                <ReadMore href=""/>
                            </div>
                            {/*list-provider*/}
                        </div>
                        {/*row*/}

                    </div>
                    {/*container*/}
                </section>
                {/*content-section*/}

                <section className="content-section content-section-with-sidebar">
                    <div className="container">
                        <div className="row">
                            <div className="widget-content content list-item list-provider col-md-9">
                                <div className="widget-header">
                                    <h3 className="text-header">
                                        <Link to=""><span>Khuyến mãi HOT</span></Link>
                                    </h3>
                                </div>
                                <div className="widget-body">
                                    <div className="row temporary">
                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/04/screenshot-27-1-medium.png" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Tã dán Bobby Sơ Sinh Siêu Mỏng Thấm Gói Đại S56(56 Miếng)</h5>
                                                    <p className="price">
                                                        <span className="free">Miễn phí</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/58/27/4d7f976313a22c7793b77e832aa5b5cd.JPG" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Unica khuyến học mùa covid miễn phí 100 khóa học</h5>
                                                    <p className="price">
                                                        <span className="current number">250.000đ</span>
                                                        <span className="original number">35.000.000đ</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/ts/product/4e/4b/97/5ebaa580a9409e12b31bfe6e578ff086.jpg" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">02 Hộp Sữa Bột Ensure Úc Vị Vani</h5>
                                                    <p className="price">
                                                        <span className="free">Miễn phí</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/ts/product/c6/43/7d/e6ca70593c3e4c9d8c6674cabe984bd4.jpg" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="price">
                                                        <span className="current number">250.000đ</span>
                                                        <span className="original number">35.000.000đ</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/m/1/m1590-bb22-2i-1.u2409.d20170418.t104943.541577.jpg" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Cờ Vây Nam Châm, Cờ Caro Cao Cấp, Có Bàn Là Hộp Đựng...</h5>
                                                    <p className="price">
                                                        <span className="free">Miễn phí</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/m/1/m1590-bb22-2i-1.u2409.d20170418.t104943.541577.jpg" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Cờ Vây Nam Châm, Cờ Caro Cao Cấp, Có Bàn Là Hộp Đựng...</h5>
                                                    <p className="price">
                                                        <span className="free">Miễn phí</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/m/1/m1590-bb22-2i-1.u2409.d20170418.t104943.541577.jpg" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Cờ Vây Nam Châm, Cờ Caro Cao Cấp, Có Bàn Là Hộp Đựng...</h5>
                                                    <p className="price">
                                                        <span className="free">Miễn phí</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card">
                                            <Link to="">
                                                <img className="card-img-top" src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/m/1/m1590-bb22-2i-1.u2409.d20170418.t104943.541577.jpg" alt="Card images cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Cờ Vây Nam Châm, Cờ Caro Cao Cấp, Có Bàn Là Hộp Đựng...</h5>
                                                    <p className="price">
                                                        <span className="free">Miễn phí</span>
                                                    </p>
                                                    <p className="time"><FontAwesomeIcon icon={faClock}/> Còn 1 ngày {new Date().toLocaleTimeString()}</p>
                                                    <span className="percent-deal">-30%</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <ReadMore href=""/>
                            </div>
                            {/*list-provider*/}

                            <Sidebar/>
                        </div>
                        {/*row*/}

                    </div>
                    {/*container*/}
                </section>
                {/*content-section*/}

                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="widget-content content list-item list-provider col-md-12">
                                <div className="widget-header">
                                    <h3 className="text-header">
                                        <Link to=""><span>Ngành hàng</span></Link>
                                    </h3>
                                </div>
                                <div className="widget-body">
                                   <SlickSlider/>
                                </div>
                                <ReadMore src=""/>
                            </div>
                            {/*list-provider*/}
                        </div>
                        {/*row*/}

                    </div>
                    {/*container*/}
                </section>
                {/*content-section*/}

            </main>
            // main-wrapper
        )
    }
}
