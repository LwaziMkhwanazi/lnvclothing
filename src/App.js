import React, { Component } from "react";
import Directory from "./componets/directory/directory.componet";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./componets/header-component/header.component";
import SignInAndSignUp from "./pages/signIn-signUp/signIn.signUp.page";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utiles";
import setCurrentUser from "./redux/user/user.actions";
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
        <Header currentUser />
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
