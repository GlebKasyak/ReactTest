import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import { Navigation } from "./components/Navigation";
import { PostPage } from "./components/PostPage";
import { ProfilePage } from "./components/ProfilePage";
import { MainPage } from "./components/MainPage";
import { LoginPage } from "./components/LoginPage";

import * as ROUTES from "./constants/routes";


export const App = () => (

    <Router>
        <Navigation />

        <Route exact path={ROUTES.MAIN_PAGE} component={MainPage} />
        <Route path={ROUTES.POSTS_PAGE} component={PostPage} />
        <Route path={ROUTES.LOGIN_PAGE} component={LoginPage} />
        <PrivateRoute path={ROUTES.PROFILE_PAGE} component={ProfilePage}/>

    </Router>
);
