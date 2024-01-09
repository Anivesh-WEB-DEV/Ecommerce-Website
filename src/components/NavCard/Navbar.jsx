import React, { useEffect } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/log-removebg-preview.png";
import Badge from "@mui/material/Badge";
import { styled as styledMaterial } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getTotal } from "../Redux/cartSlice";
import PositionedMenu from "./PositionedMenu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const StyledBadge = styledMaterial(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 37,
    top: 6,
    border: `1.7px solid white`,
    padding: "2px 5px",
    color: "#fff",
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#f7207a",
    },
  },
});
const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <div className="container_w">
      <div className="flex items-center justify-center">
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
        <div className="login_menu ">
          <div>
            <PositionedMenu />
          </div>
          <div className="cart_logo" style={{ color: "#f7207a" }}>
            <Link to="/cart">
              <ThemeProvider theme={theme}>
                <StyledBadge
                  color="primary"
                  badgeContent={cart.cartTotalQuantity}
                  className="cart1"
                >
                  <ShoppingCartIcon
                    className="cart2"
                    sx={{ width: "113px", height: "55px", color: "#f7207a" }}
                  />
                </StyledBadge>
              </ThemeProvider>
            </Link>
          </div>
        </div>
      </div>
      <div className="hr_line" style={{ backgroundColor: "#f7207a" }}></div>
    </div>
  );
};
export default Navbar;
