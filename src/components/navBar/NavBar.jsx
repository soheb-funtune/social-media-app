import React from "react";
import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>sohebsocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonPinOutlinedIcon />
        <MarkEmailReadOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src={
              "https://images.pexels.com/photos/14906973/pexels-photo-14906973.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="user"
          />
          <span>Salim</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
