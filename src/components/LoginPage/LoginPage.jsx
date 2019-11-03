import React from 'react';
import * as ROUTES from "./../../constants/routes";
import { fakeAuth } from "../../constants/fakeAuth";

import { Error } from "../Error";
import { Redirect } from "react-router-dom";

export class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
        redirect: false,
        isError: false
    };

    onSubmit = (event) => {

        if(localStorage.getItem("username") === fakeAuth.username &&
            localStorage.getItem("password") === fakeAuth.password ) {
            this.signIn();
        } else {
            this.setState({isError: true})
        }

        event.preventDefault();
    };

    signIn = () => {
        fakeAuth.authenticated(() => {
            this.setState({
                redirect: true
            })
        })
    };

    onChange = (event) => {
        const { name, value } = event.target;

        this.setState({[name]: value});
        localStorage.setItem(name, value);
    };

    render() {
        const { username, password, redirect, isError } = this.state;
        const errorMessage = "Имя пользователя или пароль введены не верно ";

        if(redirect === true) {
            return (
                <Redirect to={ROUTES.PROFILE_PAGE}/>
            )
        }

        return (
            <form  className="sign-in-form" onSubmit={this.onSubmit}>
                <div className="form row align-items-center">
                    <div className="offset-4 col-4 my-1">
                        <div className="input-group">
                            <input
                                value={username}
                                onChange={this.onChange}
                                name="username"
                                type="text"
                                placeholder="Username"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="offset-4 col-4 my-1">
                        <div className="input-group">
                            <input
                                value={password}
                                onChange={this.onChange}
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="offset-5 col-3 my-1 btn-submit">
                        <button type="submit" className="btn" >Sign In</button>
                    </div>
                </div>

                {isError && <Error className="error" message={errorMessage}/>}
            </form>
        )
    }

}