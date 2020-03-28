import React, { Component } from "react";

import Directory from "./componets/directory/directory.componet";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./componets/header-component/header.component";
import SignInAndSignUp from "./pages/signIn-signUp/signIn.signUp.page";
import CheckoutPage from "./pages/checkoutpage/checkout.component";

import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utiles";


import setCurrentUser from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import selectCurrentUser from "./redux/user/user.selector";
import { connect } from "react-redux";

class App extends Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>
          setCurrentUser({
            currentUser: { id: userAuth.id, ...snapShot.data() }
          })
        );
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
