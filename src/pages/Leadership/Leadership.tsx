
import video from "../../assets/mutc-images/team.mp4"
import "./Leadership.css"


interface LeadershipContentsProps{
    Heading:string;
    Text:String;
    Video:string
}
type  leadershipContainerProps={
    Text:string;
}
interface CardProps {
    user: string;
    name: string;
    description: string;
    text: string;
}
function Leadership() {
    return ( 
        <div className="leadership-parent-container">
           <LeadershipContents Heading="Meet the Team" Text='Mutc has dedicated software developes committed to success' Video={video}/> 
        <div className="leadership-section-cards">
            <div className="cards">
            < CardComponent 
                name="John Doe"
                user="/path/to/image1.jpg"
                description="Lead Developer"
                text="Innovation & Creativity"
            />
            < CardComponent 
                user="/path/to/image2.jpg"
                name="Jane Smith"
                description="UI/UX Designer"
                text="Crafting Experiences"
            />
        </div>
        </div>
        </div>
     );
}

function LeadershipContents({Heading, Text, Video}:LeadershipContentsProps){
    return(
        <div className="main-container">
            <div className="text-section">
                <h1>{Heading}</h1>
                <p>{Text}</p>
            </div>
            <div className="video-section">
                <div className="video-wrapper">
                 <video src={Video}></video>
                </div>
            </div>
        </div>
    )
}


function CardComponent({ user, name, description, text }: CardProps){
return(
    <div className="card">
            <div className="card-inner">
              
                <div className="card-front">
                <h3>{name}</h3>
                    <img src={user} alt="User" className="user-image" />
           
                </div>

             
                <div className="card-back">
                    <p>{description}</p>
                    <span>{text}</span>
                </div>
            </div>
        </div>
)
}

export default Leadership;