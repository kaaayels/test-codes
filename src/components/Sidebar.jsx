import { Link } from "react-router-dom";
import React from "react";
import bulogo from '../styles/bulogo.png';
import { BsCalendar3Event } from 'react-icons/bs';
import { ImListNumbered } from 'react-icons/im';
import { FaMedal } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { RiLoginBoxLine } from 'react-icons/ri';


export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={bulogo} alt="bulogo" />
      </div>

      <div className="title">
        BICOL&nbsp;<span className="orange-text">UNIVERSITY</span>
      </div>

      <div className="title2">Event Monitoring System</div>

      <div className="Nav">
        <div className="links" activeClassName="active-link">
          <Link to="/">
            <AiOutlineHome />
            Home</Link>
        </div>

        <div className="links" activeClassName="active-link">
          <Link to="/events-page">
            <BsCalendar3Event />
            Events</Link>
        </div>

        <div className="links" activeClassName="active-link">
          <Link to="/standings-page">
            <ImListNumbered />
            Standings</Link>
        </div>

        <div className="links" activeClassName="active-link">
          <Link to="/leaderboards-page">
            <FaMedal />
            Leaderboards</Link>
        </div>

        <div class="login-box">
        <div className="login">
          <Link to="/login">
            <RiLoginBoxLine/>
            Login | Admin
          </Link>

        </div>
      </div>
      </div>

    </div>
  );
}
