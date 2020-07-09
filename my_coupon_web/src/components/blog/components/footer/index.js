import React from "react";
import './index.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faFacebookF, faSkype, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFire, faSearch} from "@fortawesome/free-solid-svg-icons";
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
                                        Chanh Tươi là cộng đồng cho người mua sắm thông minh. Bạn có thể tìm kiếm và chia sẻ khuyến mại, mã giảm giá tốt nhất trên và ngoài Internet.
                                    </p>
                                    <p>
                                        Thanh nhiệt độ (Lạnh/ Nóng) ở mỗi khuyến mãi là độc lập và chỉ có thành viên mới có thể đánh giá
                                    </p>
                                </div>

                            </div>
                            {/*widget-about*/}
                            <div className="col-md-3 widget-menu">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            Câu hỏi thường gặp
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            Chính sách bảo mật
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            Hướng dẫn
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            Chính sách bảo mật
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="" className="nav-link">
                                            Hướng dẫn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*widget-menu*/}
                            <div className="col-md-3 widget-apps">

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
