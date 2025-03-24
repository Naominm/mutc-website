import CardContent from "../../components/card/Card";
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
function Leadership() {
    return ( 
        <div className="leadership-parent-container">
           <LeadershipContents Heading="Meet the Team" Text='Mutc has dedicated software developes committed to success' Video={video}/> 
        <div className="leadership-section">
            <Contleadership Text='Leaders'/>
            <CardComponent/>
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

function Contleadership({Text}:leadershipContainerProps){
    return(
        <div className="container-element">
              
              <p className="border"></p>
            <h2 className="heading">{Text}</h2>
        </div>
    )
}

function CardComponent(){
return(
    <div>
       <CardContent user="" name='' description="" text=""/>
    </div>
)
}

export default Leadership;