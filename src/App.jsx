import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { EventsPage } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { LeaderboardsPage } from "./pages/LeaderboardsPage";
import { StandingsPage } from "./pages/StandingsPage";
import "./styles/styles.css";
 
function App() {
  return (
    <div className="main">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events-page" element={<EventsPage />} />
        <Route path="/standings-page" element={<StandingsPage />} />
        <Route path="/leaderboards-page" element={<LeaderboardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
