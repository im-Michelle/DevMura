import React from 'react';
import "./Navbar.css";
import HomeOutlinedIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import { Link } from "react-router-dom";
import { Box, TextField } from '@mui/material';


export const NavBarFeed = () => {
  return (
    <div className="navbar">
      <div className='right'>
        <div className="logo-container">
          <img src="ruta_del_logo.png" alt="Logo de la empresa" />
        </div>
        <input type="text" placeholder="Buscar" />
      </div>
      <div className="center">
      <Link to="/ruta-destino" className="link-style">
          <HomeOutlinedIcon className="icon-style"/>
        </Link>
        <Link to="/ruta-destino">
          <GroupTwoToneIcon />
        </Link>
      </div>
      <div className="left">
        <Link to="/ruta-destino">
          <NotificationsNoneTwoToneIcon />
        </Link>
        <Link to="/ruta-destino">
          <EmailTwoToneIcon />
        </Link>
        <img src="img-profile.png" alt="profile-photo" />
      </div>
    </div>
  );
};