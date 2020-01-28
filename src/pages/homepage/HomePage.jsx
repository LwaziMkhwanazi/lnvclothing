import React from "react";
import Hats from "../hatspage/hats.component";
import Directory from "../../componets/directory/directory.componet";
import "./homepage.styles.scss";
import { Route, Switch } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <Switch>
        <Route exact path= '/'  component={Directory} />
        <Route path= '/hats' component={Hats} />
      </Switch>
    </div>
  );
}
