import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "./../../constants/routes";

export const Navigation = () => (
    <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
            <Link className="nav-link " to={ROUTES.MAIN_PAGE}>Main</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={ROUTES.POSTS_PAGE}>Posts</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to={ROUTES.PROFILE_PAGE}>Profile</Link>
        </li>
    </ul>
);
