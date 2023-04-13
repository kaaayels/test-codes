import React from 'react'
import GameForm from './EventsPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPage() {
  return (
    <div className="header">
      Welcom Admin!
      You may now add and edit event schedules.

      <div className="event">
      <h1>
        Today's Event
      </h1>
      <GameForm />
      <ToastContainer />
      </div>
    </div>

  )
}

export default AdminPage