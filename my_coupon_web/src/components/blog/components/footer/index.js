import React from "react";
import './index.css';
import {Link} from "react-router-dom";

export default class Footer extends React.Component{
    render() {
        return (
            <footer id="footer-wrapper">
                <nav className="footer-menu">
                    <div className="container">
                        <ul className="nav bottom-menu">
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
