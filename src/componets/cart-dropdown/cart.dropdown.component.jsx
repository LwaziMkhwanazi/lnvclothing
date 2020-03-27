import React from "react";
import "./cart.dropdown.styles.scss";
import CustomButton from "../custome-button/custom.button.component";
import CartItem from "../cart.item/cart.item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProbs = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProbs)(CartDropdown);