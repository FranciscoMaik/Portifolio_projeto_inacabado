import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../src/pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
