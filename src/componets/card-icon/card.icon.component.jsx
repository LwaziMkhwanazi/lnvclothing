import React from "react";
import "./card.icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../assets/original.svg";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProbs = state => ({
  itemCount: selectCartItemCount(state)
});

const mapDispatchToProbs = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProbs, mapDispatchToProbs)(CartIcon);
