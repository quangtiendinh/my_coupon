import React from 'react';
import {Link} from "react-router-dom";

export default class Blog extends React.Component {
    render() {
        return(
          <div className="blog-wrapper">
              <header id="header-wrapper">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-3 logo-wrapper">
                            <h1 id="logo">
                                <Link to="/">
                                    <img src="https://cdn.sudospaces.com/chanhtuoi-com/uploads/2020/02/logo-chanhtuoi-1.png" alt="" className="img"/>
                                </Link>
                            </h1>
                         </div>
                         <div className="col-md-6 search-wrapper">
                             <form action="" className="form-horizontal">
                                 <div className="input-group mb-3">
                                     <input type="text" className="form-control" placeholder="Search"/>
                                         <div className="input-group-append">
                                             <button className="btn btn-success" type="submit">Go</button>
                                         </div>
                                 </div>
                             </form>
                         </div>
                         {/*search-wrapper*/}
                         <div className="col-md-3 auth-wrapper">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link to="/">Đăng nhập</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/">Đăng ký</Link>
                                </li>
                            </ul>
                         </div>
                         {/*auth-wrapper*/}
                     </div>
                 </div>
                 {/*container */}
              </header>
              {/*header-wrappert*/}

              <nav id="menu-wrapper" className="top-menu-wrapper">
                <div className="container">
                    <ul className="nav top-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Ngành hàng</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Mã khuyến mãi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Hướng dẫn</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Đánh giá</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Tin khuyến mãi</Link>
                        </li>
                    </ul>
                </div>
                {/*container*/}
              </nav>
              {/*menu-wrapper*/}

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
                {/*home-slider*/}

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
              {/*main-wrapper*/}

              <footer id="footer-wrapper">
                  <nav className="footer-menu">

                  </nav>
                  {/*footer-menu*/}
                  <section className="footer-widget">
                    <div className="row">
                        <div className="col-md-6 widget-box">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                  </section>
                  {/*footer-widget*/}
              </footer>
              {/*footer-wrapper*/}
          </div>
        );
    }
}
