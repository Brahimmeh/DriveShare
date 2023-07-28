import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HotelIcon from '@mui/icons-material/Hotel';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RouteIcon from '@mui/icons-material/Route';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
 
  const navigate = useNavigate()

  const handleClick = async (e) => {
    localStorage.removeItem('user');
    navigate("/");
    window.location.reload();
  
  };

  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser);
  const id = parsedUser._id;
  console.log(id);
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin DashBoard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/vehicule" style={{ textDecoration: "none" }}>
            <li>
              <CarRentalIcon className="icon" />
              <span>Vehicules</span>
            </li>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
          <li>
            <LocationOnIcon className="icon" />
            <span>Locations</span>
          </li>
          </Link>
          <Link to="/path" style={{ textDecoration: "none" }}>
          <li>
            <RouteIcon className="icon" />
            <span>Paths</span>
          </li>
          </Link>
          <Link to="/hotel" style={{ textDecoration: "none" }}>
          <li>
            <HotelIcon className="icon" />
            <span>Hotels</span>
          </li>
          </Link>
          <Link to="/reservation" style={{ textDecoration: "none" }}>
          <li>
            <BookOnlineIcon className="icon" />
            <span>Reservation</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <Link to={`/user/${id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Profile</div>
            </Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <Link onClick={handleClick} style={{color:"inherit", textDecoration:"none"}}>
            <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
