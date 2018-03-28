import React from "react"
import {Router, Redirect, Route, IndexRedirect, IndexRoute} from "react-router"

import App from "./components/app"
import HomePage from "./components/pages/home"
import SwaggerPage from "./components/pages/swagger"
import NotFoundPage from "./components/pages/not-found"
import ParameterOrVariablePage from "./components/pages/parameter-or-variable"


export default (
  <Router basename="/tmp">
    <Route path="/tmp" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/tmp/swagger" component={SwaggerPage}/>
      <Route path="/tmp/:name" component={ParameterOrVariablePage}/>
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
