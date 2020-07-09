import React from "react";
import './index.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faSkype, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default class SocialMenu extends React.Component {
    render() {
        return (
            <ul className="nav d-inline-flex social-menu-component">
                <li className="nav-item fa-social fa-facebook">
                    <Link to="/" className="nav-link"><FontAwesomeIcon icon={faFacebookF}/></Link>
                </li>
                <li className="nav-item fa-social fa-skype">
                    <Link to="/" className="nav-link"><FontAwesomeIcon icon={faSkype}/></Link>
                </li>
                <li className="nav-item fa-social fa-youtube">
                    <Link to="/" className="nav-link"><FontAwesomeIcon icon={faYoutube}/></Link>
                </li>
                <li className="nav-item fa-social fa-email">
                    <Link to="/" className="nav-link"><FontAwesomeIcon icon={faEnvelope}/></Link>
                </li>
            </ul>
            // social-menu-component
        );
    }
}
