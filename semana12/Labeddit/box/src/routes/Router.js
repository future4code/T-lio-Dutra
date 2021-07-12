import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FeedPage from "../pages/FeedPage";
import PostPage from "../pages/PostPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";


const Router = ({setRightButtonText}) => {
    return (
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText} />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage setRightButtonText={setRightButtonText} />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="/post/:id">
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router