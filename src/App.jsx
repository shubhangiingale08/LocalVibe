import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/AddEvent";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MapView from "./components/MapView";
import Profile from "./components/Profile";
import axios from "axios";


function App() {
  const [newEvents, setNewEvents] = useState([]);
  const [rsvpEvents, setRsvpEvents] = useState([]);

  const addEvent = (event) => {
    setNewEvents([...newEvents, event]);
  };


  const deleteEvent = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/events/${id}`);

    setNewEvents(
      newEvents.filter((event) => event._id !== id && event.id !== id)
    );

    alert("Event deleted successfully");

  } catch (error) {
    console.log(error);
    alert("Delete failed");
  }
};


  const updateEvent = (updatedEvent) => {
    setNewEvents(
      newEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };


  const handleRSVP = (event) => {
    setRsvpEvents([
      ...rsvpEvents,
      event
    ]);

    alert("RSVP Successful!");
  };


  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Events
                newEvents={newEvents}
                deleteEvent={deleteEvent}
                updateEvent={updateEvent}
                handleRSVP={handleRSVP}
              />
              <MapView />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />


        <Route
          path="/event/:id"
          element={<EventDetails newEvents={newEvents} />}
        />


        <Route
          path="/add-event"
          element={<AddEvent addEvent={addEvent} />}
        />


        <Route
          path="/profile"
          element={
            <Profile
  rsvpEvents={rsvpEvents}
/>
          }
        />


      </Routes>

    </BrowserRouter>
  );
}
export default App;