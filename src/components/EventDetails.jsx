import { useParams } from "react-router-dom";
import music from "../assets/music.jpg";
import food from "../assets/food.jpg";
import tech from "../assets/tech.jpg";
import cultural from "../assets/cultural.jpg";
import marathon from "../assets/marathon.jpg";
import art from "../assets/art.jpg";

function EventDetails({newEvents}){

    const {id} = useParams();

    const events = [
        {
            id:1,
            title:"🎵 Music Concert",
            date:"15 August 2026",
            location:"Pune",
            fee:"₹500",
            image:music
        },
        {
            id:2,
            title:"🍔 Food Festival",
            date:"20 August 2026",
            location:"Mumbai",
            fee:"Free",
            image:food
        },
        {
            id:3,
            title:"💻 Tech Workshop",
            date:"25 August 2026",
            location:"Hyderabad",
            fee:"₹300",
            image:tech
        },
        {
            id:4,
            title:"🎭 Cultural Festival",
            date:"30 August 2026",
            location:"Solapur",
            fee:"₹200",
            image:cultural
        },
        {
            id:5,
            title:"🏃 Marathon",
            date:"5 September 2026",
            location:"Pune",
            fee:"₹100",
            image:marathon
        },
        {
            id:6,
            title:"🎨 Art Exhibition",
            date:"10 September 2026",
            location:"Mumbai",
            fee:"Free",
            image:art
        }
    ];


    const allEvents = [...events, ...newEvents];

const event = allEvents.find(
    (item)=> item.id === Number(id)
);
if(!event){
    return <h2>Event Not Found</h2>
}

    return(
        <div className="details">

            <img src={event.image} alt={event.title}/>

            <h1>{event.title}</h1>

            <p>📅 Date: {event.date}</p>

            <p>📍 Location: {event.location}</p>

            <p>💰 Fee: {event.fee}</p>

            <button 
onClick={() => alert("You have successfully registered for this event!")}
>
    RSVP Now
</button>

        </div>
    )
}

export default EventDetails;