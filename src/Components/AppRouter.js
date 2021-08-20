import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import WorksPage from "./Pages/WorksPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/main">
                <MainPage/>
            </Route>
            <Route path="/works">
                <WorksPage/>
            </Route>
            <Redirect to="/main"/>
        </Switch>
    );
};

export default AppRouter;