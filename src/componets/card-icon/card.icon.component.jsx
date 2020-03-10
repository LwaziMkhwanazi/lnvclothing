import React from "react";
import "./card.icon.styles.scss";
import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from "../assets/original.svg";

const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick = {toggleCartHidden} >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);


const mapDispatchToProbs = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
    })

export default connect(null,mapDispatchToProbs)(CartIcon);
