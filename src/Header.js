import React from "react";
import "./Header.css";
import {
  Search,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  Notifications,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/800px-Facebook_f_Logo_%28with_gradient%29.svg.png"
        />
        <div className="header_input">
          <Search />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option--active">
          <Home fontSize="large" />
        </div>
        <div className="header_option">
          <Flag fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>Sallar Bhutto</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}
