import React, { useEffect } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/log-removebg-preview.png";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getTotal } from "../Redux/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="container_w">
      <div class="flex items-center justify-center">
        <div className="navbar">
          <Link to="/">
            <div>
              <img src={logo} alt="logo" className="logo" />
            </div>
          </Link>
          <Link to="/">
            <div>
              <h1 className="heading">Shopping App</h1>
            </div>
          </Link>
        </div>
        <div class="login_menu">
          {!isLoginPage ? (
            <div className="login">
              <Link to="/login" className="login-txt"> Login</Link>

              <div className="cart_logo">
                <Link to="/cart">
                <StyledBadge
                    badgeContent={cart.cartTotalQuantity}
                    color="success"
                    className="cart1"
                    sx={{
                      '& .MuiBadge-badge':{
                        right: '37px',
                        top: '6px',
                        border: '1.7px solid white'
                        ,padding: '2px 5px',
                        display: 'block'
                      }
                    }}
                  >
                    <ShoppingCartIcon className="cart2"  sx={{ width: "113px" , height: '47px' }}/>
                  </StyledBadge>
                </Link>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="hr_line"></div>
    </div>
  );
};

export default Navbar;
