import React from 'react';
import './index.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretDown, faHome} from "@fortawesome/free-solid-svg-icons";

export default class NavMenu extends React.Component {
    render() {
        return (
            <nav id="nav-menu-wrapper" className="top-menu-wrapper">
                <div className="container">
                    <ul className="nav top-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active nav-home"><FontAwesomeIcon icon={faHome}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Ngành hàng</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link">Mã khuyến mãi <FontAwesomeIcon icon={faCaretDown} /></Link>
                                <ul className="sub-nav nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Hướng dẫn</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Đánh giá</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Tin khuyến mãi</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Hướng dẫn</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Đánh giá</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Tin khuyến mãi</Link>
                                    </li><li className="nav-item">
                                    <Link to="/" className="nav-link">Hướng dẫn</Link>
                                </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Đánh giá</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Tin khuyến mãi</Link>
                                    </li>
                                </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Hướng dẫn</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Đánh giá</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Tin khuyến mãi</Link>
                        </li>
                    </ul>
                </div>
                {/*container*/}
            </nav>
            // menu-wrapper
        );
    }
}
