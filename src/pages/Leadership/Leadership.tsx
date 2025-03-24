import video from "../../assets/mutc-images/team.mp4"
import "./Leadership.css"

interface LeadershipContentsProps{
    Heading:string;
    Text:String;
    Video:string
}
function Leadership() {
    return ( 
        <div className="leadership-parent-container">
           <LeadershipContents Heading="Meet the Team" Text='Mutc has dedicated software developes committed to success' Video={video}/> 
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

export default Leadership;