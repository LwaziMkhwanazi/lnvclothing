import React from "react";
import Directory from "../../componets/directory/directory.componet";
import "./homepage.styles.scss";
import ShopPage from '../shop-page/shop.component'
import { Route, Switch } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <Switch>
        <Route exact path= '/'  component={Directory} />
        <Route path= '/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
