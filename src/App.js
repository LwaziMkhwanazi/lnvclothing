import React, { Component } from "react";
import Directory from "./componets/directory/directory.componet";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./componets/header-component/header.component";
import SignInAndSignUp from "./pages/signIn-signUp/signIn.signUp.page";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utiles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
  this.unsubcribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      
    });
   
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render() {
   
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
