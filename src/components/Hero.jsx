import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <>
    <section id="home" className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${heroImage})`
      }}
    >

      <h2>
        Discover Amazing Events Near You
      </h2>

      <p>
        Find local concerts, workshops, sports, food festivals and community events happening around you.
      </p>

      <button>
        Explore Events
      </button>

    </section>
    <section className="featured">

    <h2>Featured Events</h2>

    <div className="event-cards">

        <div className="event-card">
            <h3>🎵 Music Concert</h3>
            <p>Enjoy live music and performances near you.</p>
            <button>View Details</button>
        </div>


        <div className="event-card">
            <h3>🍔 Food Festival</h3>
            <p>Explore delicious local food and culture.</p>
            <button>View Details</button>
        </div>


        <div className="event-card">
            <h3>💻 Tech Workshop</h3>
            <p>Learn new skills from experts.</p>
            <button>View Details</button>
        </div>


    </div>

</section>
    
</>
  
  );
}

export default Hero;