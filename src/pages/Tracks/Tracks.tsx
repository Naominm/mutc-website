import LeadershipContents from "../../components/Hero/Hero";
import "./Tracks.css"
import "../Leadership/Leadership.css"
import video from "../../assets/mutc-images/team.mp4"

function Tracks() {
    return ( 
        <div className="main-tracks-section">
    <TracksHero/>
    <div className="cards-container">
            <TracksCard/>
          </div>
        </div>
     );
}
 function TracksHero(){
    return(
        <div className="tracks-hero-sec">
            <div className="text-section">
            <LeadershipContents Heading="Our TRacks" Text='curated tracks for you' Video={video}/>
            </div>
         
        </div>
    )
 }
  function TracksCard(){
    return(
        <div className="card-container-element">
           <div className="image-section">
            <p>image</p>
            <img src="" alt="" />
           </div>
           <div className="text-section">
            <div className="heading">
                <p>text-sec</p>
                </div>
            <div className="description"></div>
           </div>
        </div>
    )
  }

export default Tracks;