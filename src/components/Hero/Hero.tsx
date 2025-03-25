
import "./Hero.css"
interface LeadershipContentsProps{
    Heading:string;
    Text:String;
    Video:string
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
                 <video src={Video} controls={false} autoPlay={true} muted={true} loop={true}></video>
                </div>
            </div>
        </div>
    )
}
 export default LeadershipContents;