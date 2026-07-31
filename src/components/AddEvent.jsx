import { useState } from "react";
import axios from "axios";
import defaultEvent from "../assets/default-event.jpg";


function AddEvent({ addEvent }) {
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/events",
        {
          title: eventName,
          category: category.toLowerCase(),
          date: date,
          location: location,
          fee: fee,
          image: "default-event.jpg"
        }
      );

      addEvent({
  id: response.data._id,
  title: response.data.title,
  category: response.data.category,
  date: response.data.date,
  location: response.data.location,
  fee: response.data.fee,
  image: defaultEvent
});

      alert("Event Added Successfully!");

      setEventName("");
      setCategory("");
      setDate("");
      setLocation("");
      setFee("");

    } catch (error) {
      console.error(error);
      alert("Error adding event");
    }
  };

  return (
    <div className="add-event">
      <h1>Add New Event</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Fee"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />

        <button type="submit">
          Add Event
        </button>

      </form>
    </div>
  );
}

export default AddEvent;