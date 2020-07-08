import React from "react";
import './index.scss';
import {Link} from "react-router-dom";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar col-md-3">
                <div className="sidebar-widget">
                    <Link to="" className="item">
                        <img src="https://cdn.chanhtuoi.com/uploads/2020/02/phong-covid-19.png" alt="aa" className="img"/>
                    </Link>
                </div>
                <div className="sidebar-widget">
                    <Link to="" className="item">
                        <img src="https://cdn.chanhtuoi.com/uploads/2020/02/moi-tham-gia-group-1.png" alt="aa" className="img"/>
                    </Link>
                </div>
            </div>
        )
    }
}
