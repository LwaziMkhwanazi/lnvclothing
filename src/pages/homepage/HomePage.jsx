import React from "react";
import Directory from "../../componets/directory/directory.componet";
import "./homepage.styles.scss";
import ShopPage from '../shop-page/shop.component'
import { Route, Switch } from "react-router-dom";
import Header from '../../componets/header-component/header.component'

export default function Homepage() {
  return (
    <div className="homepage">
      <Header/>
      <Switch>
        <Route exact path= '/'  component={Directory} />
        <Route path= '/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
