import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import TripDetailPage from "../pages/TripDetailPage"
import AdminHomePage from "../pages/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import ListTripsPage from "../pages/ListTripsPage"
import CreateTripPage from "../pages/CreateTripPage"
import SignupPage from "../pages/SignupPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/signup">
                    <SignupPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/trip-detail">
                    <TripDetailPage />
                </Route>
                <Route exact path="/trips">
                    <ListTripsPage />
                </Route>
                <Route exact path="/apply">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/adm-home">
                    <AdminHomePage />
                </Route>
                <Route exact path="/create-trip">
                    <CreateTripPage />
                </Route>
                <Route>
                    <div>Erro 404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router