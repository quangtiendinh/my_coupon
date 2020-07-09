import React from "react";
import './index.scss';
import {Link} from "react-router-dom";

export default class ReadMore extends React.Component {

    getHref = (href) => {
        return href !== undefined && href !== null ? href : "";
    }

    render() {
        return (
            <div className="read-more-component">
                <Link to={this.getHref(this.props.href)} className="btn btn-read-more">Xem thêm</Link>
            </div>
            // readmore-component
        )
    }
}
