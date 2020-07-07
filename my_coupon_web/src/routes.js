import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes.js';
import Blog from "./components/blog";

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.HOME} component={Blog}/>
            </Switch>
        )
    }
}
