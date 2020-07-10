import React from "react";
import './index.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faFacebookF, faSkype, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft, faCaretRight, faEnvelope, faFire, faSearch} from "@fortawesome/free-solid-svg-icons";
import SocialMenu from "../../../../shared/components/social-menu";

export default class Footer extends React.Component{
    render() {
        return (
            <footer id="footer-wrapper">
                <nav className="footer-menu">
                    <div className="container">
                      <div className="row">
                          <div className="col-md-4 widget socials-widget">
                              <span> Kết nối với chúng tôi: </span>
                              <SocialMenu/>
                          </div>
                          {/*socials-widget*/}

                          <div className="col-md-5 register-widget">
                            <span>Đăng ký nhận bản tin: </span>
                              <form action="" className="d-inline-flex form-register">
                                  <div className="input-group">
                                      <input type="email" id="email" className="form-control" placeholder="Nhập địa chỉ email của bạn..."/>
                                      <div className="input-group-append">
                                          <button className="btn btn-success btn-search" type="submit">Đăng ký</button>
                                      </div>
                                  </div>
                              </form>
                              {/*form-register*/}
                          </div>
                          {/*register-widget*/}

                          <div className="col-md-3 widget facebook-widget">
                            <Link to="" className="btn btn-danger btn-fb-message"><FontAwesomeIcon icon={faFire}/> Nhận tin nhắn khuyến mãi</Link>
                          </div>
                          {/*facebook-widget*/}
                      </div>
                       {/*row*/}
                    </div>
                    {/*container*/}
                </nav>
                {/*footer-menu*/}
                <section className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 widget-box widget-about">
                                <div className="box-logo">
                                    <h3>
                                        <Link to="">
                                            <img src="https://cdn.chanhtuoi.com/uploads/2019/12/logo.png" alt="" className="img"/>
                                        </Link>
                                    </h3>
                                </div>
                                <div className="widget-body">
                                    <p>
                                        Bloggiamgia.vn là nơi chia sẽ thông tin khuyến mãi, mã giảm giá khi mua hàng online tại các website mua sắm trực tuyến lớn và uy tín tại Việt Nam.
                                    </p>
                                    <p>
                                        Ngoài ra chúng tôi còn tìm kiếm và so sánh giá hàng ngàn sản phẩm chất lượng từ các nhà bán hàng uy tín giúp bạn có thể dễ dàng tìm mua các sản phẩm tốt nhất với mức giá phải chăng nhất…[+ Xem Thêm]
                                    </p>
                                </div>

                            </div>
                            {/*widget-about*/}
                            <div className="col-md-3 widget-menu">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <FontAwesomeIcon icon={faCaretRight}/>Câu hỏi thường gặp
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <FontAwesomeIcon icon={faCaretRight}/>Chính sách bảo mật
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <FontAwesomeIcon icon={faCaretRight}/>Hướng dẫn
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <FontAwesomeIcon icon={faCaretRight}/>Liên hệ
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            <FontAwesomeIcon icon={faCaretRight}/>Kiếm tiền online
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*widget-menu*/}
                            <div className="col-md-3 widget-apps">
                                <div className="widget-header">
                                    <h5 className="text-header">Tải ứng dụng cho Smart phone tại: </h5>
                                </div>
                                <div className="widget-body">
                                    <Link to="">
                                        <img src="/assets/images/google_play.png"/>
                                    </Link>
                                    <Link to="">
                                        <img src="/assets/images/app_store.png"/>
                                    </Link>
                                </div>

                            </div>
                            {/*widget-apps*/}
                        </div>
                        {/*row*/}
                    </div>
                    {/*container*/}
                </section>
                {/*footer-widget*/}

                <section className="footer-copyright">
                    <div className="container">
                        <p className="text-center">Copyright &copy; 2020 Cộng đồng Chanh Tươi. All rights reserved - Designed by Sudo</p>
                    </div>
                    {/*container*/}
                </section>
                {/*footer-copyright*/}
            </footer>
            // footer-wrapper
        )
    }
}
