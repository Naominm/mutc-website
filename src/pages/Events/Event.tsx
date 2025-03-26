import { FaClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import LeadershipContents from "../../components/Hero/Hero";
import Image2 from "../../assets/mutc-images/hero2.jpg"
import video from "../../assets/data.mp4"
import "./Event.css"

import FooterElement from "../../components/Footer/Footer";


interface eventCardProps{
  title:string,
  Description:string,
  location:string,
  lead:string,
  learnItems:string[],
  bringItems:string[],
  header:string,
  header2:string
}

function Events() {
    return ( 
      <div className="events-page">
       <EventsHero/>
       <EventCta/>
       <EventCard 
        title="Cyber Security" 
        Description="Every Monday from 4pm to 7pm" 
        location="Computer Lab F04" 
        lead="By Webster Ifedha"
        header="What to Learn"
        learnItems={["Ethical Hacking Techniques", "Secure Coding Practices"]}
        header2="What to Bring"
        bringItems={["Laptop", " Notebook"]}
      />
      <EventCard 
  title="UI/UX" 
  Description="Every Tuesday from 5pm to 8pm" 
  location="Computer Lab F04" 
  lead="By Manase Gunga"
  header="What to Learn"
  learnItems={["Wireframing", "Prototyping", "User Research"]}
  header2="What to Bring"
  bringItems={["Laptop", "Notebook"]}
/>

<EventCard 
  title="Web Development" 
  Description="Every Wednesday from 6pm to 9pm" 
  location="Computer Lab F04" 
  lead="By Carolyne Githenduka"
  header="What to Learn"
  learnItems={["HTML", "CSS", "JavaScript", "React"]}
  header2="What to Bring"
  bringItems={["Laptop", "Notebook"]}
/>

<EventCard 
  title="Mobile Apps Development" 
  Description="Every Thursday from 4pm to 7pm" 
  location="Computer Lab F04" 
  lead="By Stanley Amunze"
  header="What to Learn"
  learnItems={["Flutter", "React Native", "Mobile UI Design"]}
  header2="What to Bring"
  bringItems={["Laptop", "Notebook"]}
/>

<EventCard 
  title="Cloud Engineering" 
  Description="Every Friday from 3pm to 6pm" 
  location="Computer Lab F04" 
  lead="By Paul Karanja"
  header="What to Learn"
  learnItems={["AWS", "Azure", "Google Cloud"]}
  header2="What to Bring"
  bringItems={["Laptop", "Notebook"]}
/>

<EventCard 
  title="Power Platform" 
  Description="Every Saturday from 1pm to 4pm" 
  location="Computer Lab F04" 
  lead="By Evyonn Mbithe"
  header="What to Learn"
  learnItems={["Power BI", "Power Apps", "Power Automate"]}
  header2="What to Bring"
  bringItems={["Laptop", "Notebook"]}
/>
<FooterElement/>
      </div>
     );
}
function EventsHero(){
  return(
    <div className="events-hero-section">
     <LeadershipContents Heading="Grow Your Network and Skills with our Event" Text="events" Video={video}/>
    </div>
  )
}
function EventCta(){
  return(
    <div className="event-btn">
      <button className="active-btn">All Events</button>
      <button>Nearest Events</button>
      <button>Latest Events</button>
    </div>
  )
}

function EventCard({ title, Description, location, lead, learnItems, bringItems,header,header2 }:eventCardProps){
  return(
    <div className="event-card">
     <div className="event-image-section">
      <div className="event-image-wrapper">
        <img src={Image2} alt="" />
        
      </div>
     </div>
     <div className="event-text-section">
      <div className="title"> {title}</div>
      <div className="description"> <FaClock /> {Description}</div>
      <div className="location">  <FaMapMarkerAlt /> {location}</div>
      <div className="lead"> <FaUser /> {lead}</div>
     
     </div>
     <div className="left-details-sec">
     <div className="event-list-details">
     <h4>{header}</h4>
          <ul>
            {
              learnItems.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
            }
          </ul>
          <button className="regcta">regiser</button>
     </div>

   
     <div className="bring">
          <h4>{header2}</h4>
          <ul>
          {bringItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        
        </div>
        
     </div>
     
    </div>
  )
}
export default Events;