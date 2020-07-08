import React from "react";
import './index.css';
import {Link} from "react-router-dom";

export default class Content extends React.Component{
    render() {
        return (
            <main id="main-wrapper">
                <section className="banner-widget full-banner">

                </section>
                {/*banner-widget*/}

                <section className="home-slider">
                    <div className="container">
                        <div className="row">
                            <div className="sliders-widget col-md-9">
                                <div id="slider-banner" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#slider-banner" data-slide-to="0" className="active"/>
                                        <li data-target="#slider-banner" data-slide-to="1"/>
                                        <li data-target="#slider-banner" data-slide-to="2"/>
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="https://cdn.chanhtuoi.com/uploads/2020/05/untitled-2-7.jpg" alt="Chania"/>
                                            <div className="carousel-caption">
                                                <h3>Los Angeles</h3>
                                                <p>LA is always so much fun!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*carousel-inner*/}

                                    <a className="left carousel-control" href="#slider-banner" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left"/>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#slider-banner" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right"/>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            {/*sliders-widget*/}
                            <div className="banner-widget col-md-3">
                                <div className="banner-box">
                                    <Link to="">
                                        <img src="https://cdn.chanhtuoi.com/uploads/2020/02/phong-covid-19.png" alt="" className="img"/>
                                    </Link>
                                </div>
                                {/*banner-box*/}
                                <div className="banner-box">
                                    <Link to="">
                                        <img src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="" className="img"/>
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
                {/*home-home-slider*/}

                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="widget-content content list-item list-provider col-md-12">
                                <div className="widget-header">
                                    <h3 className="text-header">
                                        Mã giảm giá
                                    </h3>
                                </div>
                                <div className="widget-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*list-provider*/}
                        </div>
                        {/*row*/}

                    </div>
                    {/*container*/}
                </section>
                {/*content-section*/}

                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="widget-content content list-item list-provider col-md-9">
                                <div className="widget-header">
                                    <h3 className="text-header">
                                        Khuyến mãi HOT
                                    </h3>
                                </div>
                                <div className="widget-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-title">
                                                    <img className="card-img-top" src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Mã giảm giá Lazada</h5>
                                                    <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập nhật liên tục</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*list-provider*/}

                            <div className="col-md-3 sidebar-widget">
                                <div className="widget-header">
                                    <h4 className="text-header">
                                        Bài viết mới
                                    </h4>
                                    <div className="widget-body">

                                    </div>

                                </div>
                            </div>
                            {/*sidebar-widget*/}
                        </div>
                        {/*row*/}

                    </div>
                    {/*container*/}
                </section>
                {/*content-section*/}

            </main>
            // main-wrapper
        );
    }
}
