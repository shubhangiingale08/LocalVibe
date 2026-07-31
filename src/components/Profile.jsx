import { useEffect, useState } from "react";
import axios from "axios";

function Profile({ rsvpEvents }) {
  const [createdEvents, setCreatedEvents] = useState([]);

  useEffect(() => {
    fetchCreatedEvents();
  }, []);

  const fetchCreatedEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setCreatedEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="profile">

      <h1>👤 My Events</h1>

      <h2>🎟️ RSVP Events</h2>

      <div className="profile-events">
        {rsvpEvents.length === 0 ? (
          <p>No RSVP Events Yet</p>
        ) : (
          rsvpEvents.map((event) => (
            <div className="profile-card" key={event.id}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          ))
        )}
      </div>

      <h2>➕ My Created Events</h2>

      <div className="profile-events">
        {createdEvents.length === 0 ? (
          <p>No Created Events Yet</p>
        ) : (
          createdEvents.map((event) => (
            <div className="profile-card" key={event._id}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Fee:</strong> {event.fee || "Free"}</p>
            </div>
          ))
        )}
      </div>

    </section>
  );
}

export default Profile;