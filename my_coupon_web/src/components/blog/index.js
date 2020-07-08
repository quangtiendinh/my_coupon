import React from 'react';
import { Switch , Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Header from "./components/header";
import NavMenu from "./components/nav-menu";
import Footer from "./components/footer";
import Home from "./home";
import Contact from "./contact";

export default class Blog extends React.Component {
    render() {
        return(
          <div className="blog-wrapper">
              <Header/>
              <NavMenu/>
              <Switch>
                  <Route exact path={ROUTES.HOME} component={Home}/>
                  <Route path={ROUTES.CONTACT} component={Contact}/>
              </Switch>
              <Footer/>
          </div>
        );
    }
}
