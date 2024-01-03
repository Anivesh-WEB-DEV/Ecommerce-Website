import React , { useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { removeFromCart ,decreaseCart , addToCart , clearCart , getTotal } from "../Redux/cartSlice";



const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }
  const handleInceaseCart =(cartItem)=>{
    dispatch(addToCart(cartItem));
  }
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }


  return (
    <div className="cart-container">
      <h2>shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart is Empty</p>
          <div className="start-shopping">
            <Link to="/">
              <KeyboardBackspaceIcon />
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div className="title-description">
                      <h3 className="cart-product-title"> {cartItem.title.slice(0,38)}...</h3>
                      <p className="cart-product-description">{cartItem.description.slice(0,50)}...</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={()=> handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleInceaseCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${Math.round(cartItem.price * cartItem.cartQuantity)}
                  </div>
                </div>
              ))}
          </div>

          <div className="cart-Summary flex justify-between items-center">
            <button className="clear-cart" onClick={()=> handleClearCart()}>Clear Cart</button>
            <div className="cart-checkout flex flex-col items-end">
              <div className="subtotal items-start">
                <span className="subtotal_btn ">SubTotal</span>
                <span className="amount">${Math.round(cart.cartTotalAmount)}</span>
              </div>
              <p>Taxes and Shipping Calculated at Checkout </p>
              <Link to="/checkout">
                <button>Check Out</button>
                </Link>
              <div className="continue-shopping">
                <Link to="/">
                  <KeyboardBackspaceIcon />
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default Cart;
