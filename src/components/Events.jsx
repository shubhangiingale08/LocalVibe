
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import music from "../assets/music.jpg";
import food from "../assets/food.jpg";
import tech from "../assets/tech.jpg";
import cultural from "../assets/cultural.jpg";
import marathon from "../assets/marathon.jpg";
import art from "../assets/art.jpg";
import EventCard from "./EventCard";

function Events({newEvents, deleteEvent, updateEvent, handleRSVP}){
    const [search, setSearch] = useState("");
const [category, setCategory] = useState("all");
const [dateFilter, setDateFilter] = useState("all");
const [dbEvents, setDbEvents] = useState([]);

useEffect(() => {
  fetchEvents();
}, []);

const fetchEvents = async () => {
  try {
    const res = await axios.get("https://localvibe-backend-gcdd.onrender.com/api/events");
    setDbEvents(res.data);
  } catch (err) {
    console.log(err);
  }
};

const events = [
{
    id:1,
title:"🎵 Music Concert",
category:"music",
date:"15 August 2026",
location:"Pune",
fee:"₹500",
image:music,
premium:true
},

{
    id:2,
title:"🍔 Food Festival",
category:"food",
date:"20 August 2026",
location:"Mumbai",
fee:"Free",
image:food,
premium:false
},

{
    id:3,
title:"💻 Tech Workshop",
category:"tech",
date:"25 August 2026",
location:"Hyderabad",
fee:"₹300",
image:tech,
premium:true
},

{
    id:4,
title:"🎭 Cultural Festival",
category:"cultural",
date:"30 August 2026",
location:"Solapur",
fee:"₹200",
image:cultural,
premium:false
},

{
    id:5,
title:"🏃 Marathon",
category:"sports",
date:"5 September 2026",
location:"Pune",
fee:"₹100",
image:marathon,
premium:true
},

{
    id:6,
title:"🎨 Art Exhibition",
category:"art",
date:"10 September 2026",
location:"Mumbai",
fee:"Free",
image:art,
premium:false
}

];
const allEvents = [...events, ...newEvents, ...dbEvents];
const filteredEvents = allEvents.filter((event)=>{


const matchSearch = event.title
.toLowerCase()
.includes(search.toLowerCase());


const matchCategory =
category === "all" ||
event.category === category;
const matchDate =
dateFilter === "all" ||
(dateFilter === "free" && event.fee === "Free");



return matchSearch && matchCategory && matchDate;

});
const sortedEvents = [...filteredEvents].sort((a, b) => {
  return (b.premium === true) - (a.premium === true);
});


return(
<section id="events" className="events">

<h2>Explore Events</h2>


<div className="search-box">

<input
type="text"
placeholder="Search events..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


<div className="categories">

<button onClick={()=>setCategory("all")}>
All
</button>

<button onClick={()=>setCategory("music")}>
Music
</button>

<button onClick={()=>setCategory("food")}>
Food
</button>

<button onClick={()=>setCategory("tech")}>
Workshop
</button>

<button onClick={()=>setCategory("sports")}>
Sports
</button>

<button onClick={()=>setCategory("cultural")}>
Cultural
</button>

</div>
<div className="date-filter">

<h3>Filter By Date</h3>

<button onClick={()=>setDateFilter("all")}>
All
</button>

<button onClick={()=>setDateFilter("free")}>
Free Events
</button>

</div>

<div className="event-container">

{
  sortedEvents.map((event) => (
   <EventCard
  key={event._id || event.id}
  id={event._id || event.id}
  title={event.title}
  date={event.date}
  location={event.location}
  fee={event.fee || "Free"}
  image={
  event.image ||
  (
    event.category?.toLowerCase() === "music"
      ? music
      : event.category?.toLowerCase() === "food"
      ? food
      : event.category?.toLowerCase() === "tech"
      ? tech
      : event.category?.toLowerCase() === "cultural"
      ? cultural
      : event.category?.toLowerCase() === "sports"
      ? marathon
      : art
  )
}
  premium={event.premium || false}
  deleteEvent={deleteEvent}
  updateEvent={updateEvent}
  handleRSVP={handleRSVP}
/>
  ))
}

</div>

</section>
)

}

export default Events;