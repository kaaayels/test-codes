import { Link } from "react-router-dom";
import React from "react";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="links">
        <Link to="/">Home</Link>
      </div>
      <div className="links">
        <Link to="/events-page">Events Page</Link>
      </div>
      <div className="links">
        <Link to="/standings-page">Standings Page</Link>
      </div>
      <div className="links">
        <Link to="/leaderboards-page">Leaderboards Page</Link>
      </div>
    </div>
  );
}
