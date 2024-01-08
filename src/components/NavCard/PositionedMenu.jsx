import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import UserLogo from "../../assets/user.png";
import LogoutIcon from "@mui/icons-material/Logout";
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {isAuthenticated ? (
          <div className="user_info ">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block rounded-full ring-2 ring-white"
                src={user.picture}
                alt="user-picture"
                style={{
                  width: "46px",
                  height: "44px",
                  border: "1px solid black",
                }}
              />
            </div>
          </div>
        ) : (
          <div className="user_info ">
            <Stack>
              <Avatar alt="Remy Sharp" src={UserLogo} />
            </Stack>
          </div>
        )}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "rigth",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {user && <h3 className="ps-1">{user.name}</h3>}
        {user && <h3 className="ps-1 pe-1">{user.email}</h3>}
        <MenuItem onClick={handleClose} className="text-center">
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              style={{
                paddingLeft: "5px",
                paddingRight: "10px",
                fontSize: "21px",
                paddingTop: "4px",
              }}
            >
              Log Out <LogoutIcon sx={{ color: "black", marginLeft: "16px" }} />
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              style={{ paddingLeft: "5px", paddingRight: "10px" }}
            >
              Log In
            </button>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
}
