import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>LocalVibe</h1>

      <nav>
        <a href="/#home">Home</a>
        <a href="/#events">Events</a>
        <Link to="/add-event">Add Event</Link>
        <Link to="/profile">
  My Events
</Link>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;