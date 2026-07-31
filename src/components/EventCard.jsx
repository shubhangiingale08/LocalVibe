import { Link } from "react-router-dom";

function EventCard({ 
  id, 
  title, 
  date, 
  location, 
  fee, 
  image, 
  premium,
  deleteEvent,
  updateEvent,
  handleRSVP
}) {

  return (
    <div className="card">

      <img src={image} alt={title} />

      {premium && (
        <span className="premium-badge">
          ⭐ Premium
        </span>
      )}

      <h3>{title}</h3>

      <p>
        <strong>Date:</strong> {date}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <p>
        <strong>Fee:</strong> {fee}
      </p>


      <Link to={`/event/${id}`}>
        <button>
          View Details
        </button>
      </Link>


      <button
        onClick={() => deleteEvent(id)}
        className="delete-btn"
      >
        Delete
      </button>


      <button
        onClick={() =>
          updateEvent({
            id,
            title: title + " (Updated)",
            date,
            location,
            fee,
            image,
            premium
          })
        }
        className="edit-btn"
      >
        Edit
      </button>
      <button
  onClick={() =>
    handleRSVP({
      id,
      title,
      date,
      location,
      fee,
      image,
      premium
    })
  }
  className="rsvp-btn"
>
  🎟️ I'm Going
</button>


    </div>
  );
}

export default EventCard;