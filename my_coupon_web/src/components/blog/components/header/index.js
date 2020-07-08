import React from 'react';
import './index.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component{
    render() {
        return (
            <header id="header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 logo-wrapper">
                            <h1 className="logo">
                                <Link to="/">
                                    <img src="https://cdn.sudospaces.com/chanhtuoi-com/uploads/2020/02/logo-chanhtuoi-1.png" alt="" className="img"/>
                                </Link>
                            </h1>
                        </div>
                        <div className="col-md-6 search-wrapper">
                            <form action="" className="form-horizontal search-form">
                                <div className="input-group mb-3">
                                    <input type="text" id="text-query" className="form-control" placeholder="Tìm kiếm mã khuyến mãi"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-success btn-search" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*search-wrapper*/}
                        <div className="col-md-3 auth-wrapper">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <button className="btn btn-success">Đăng ký</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-danger">Đăng nhập</button>
                                </li>
                            </ul>
                        </div>
                        {/*auth-wrapper*/}
                    </div>
                </div>
                {/*container */}
            </header>
            // header-wrappert*
        );
    }
}
