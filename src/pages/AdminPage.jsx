import React from 'react'
import GameForm from './EventsPage'
import GameForm2 from './EventsPage'
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
      </div>

      <div className="mens">
      <h2>
        Mens
        </h2>
      </div>
      <GameForm />
      <ToastContainer />
      <div className="womens">
      <h2>
        Womens
        </h2>
      </div>
      <GameForm2 />
      <ToastContainer />
    </div>

  )
}

export default AdminPage