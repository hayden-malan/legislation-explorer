import React from "react"
import {Redirect, Route, IndexRedirect, IndexRoute} from "react-router"

import App from "./components/app"
import HomePage from "./components/pages/home"
import SwaggerPage from "./components/pages/swagger"
import NotFoundPage from "./components/pages/not-found"
import ParameterOrVariablePage from "./components/pages/parameter-or-variable"

// specify basename below if running in a subdirectory or set as "/" if app runs in root
const appHistory = useRouterHistory(createHistory)({
  basename: "/tmp"
});

export default (
  <Router history={appHistory} />
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="swagger" component={SwaggerPage}/>
      <Route path=":name" component={ParameterOrVariablePage}/>
      <Route path="parameters">
        <IndexRedirect to="/" />
        <Redirect from=":name" to="/:name" />
      </Route>
      <Route path="variables">
        <IndexRedirect to="/" />
        <Redirect from=":name" to="/:name" />
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
)
