import React from "react";
import './index.scss';
import {Link} from "react-router-dom";

export default class Card extends React.Component{
    render() {
        return (
            <div className="card card-component">
                <Link to="" >
                    <img className="card-img-top" src={this.props.src} alt="Card images cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Mã giảm giá Lazada</h5>
                        <p className="card-text">Tổng hợp khuyến mãi và mã giảm giá Lazada cập ...</p>
                    </div>
                </Link>
            </div>
        );
    }
}
