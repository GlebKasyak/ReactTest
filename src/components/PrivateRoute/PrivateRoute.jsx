import React from "react";
import * as ROUTES from "./../../constants/routes";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../../constants/fakeAuth";

export const PrivateRoute = ({component: Component, ...rest}) => {

    return (
            <Route {...rest} render={(props) => (
                fakeAuth.isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to={ROUTES.LOGIN_PAGE}/>
            )}/>
        )

};

