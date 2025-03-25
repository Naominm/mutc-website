import LeadershipContents from "../../components/Hero/Hero";
import ContactSection from "../../components/Form/Form";
import "./Tracks.css"
import "../Leadership/Leadership.css"
import video from "../../assets/mutc-images/team.mp4"
import image1 from "../../assets/mutc-images/hero1.jpg"


const trackData: TrackData[] = 
    [
        { 
            title: "Cyber Security", 
            description: "This track dives into the critical aspects of protecting systems, networks, and data from cyber threats. Learners will master security protocols, ethical hacking, encryption techniques, and threat analysis. Hands-on projects and real-world scenarios will sharpen their ability to identify and mitigate vulnerabilities, preparing them to conduct security audits and implement robust defenses against cyber attacks."
        },
        { 
            title: "UI/UX Design", 
            description: "Focused on creating intuitive and visually appealing designs, this track covers user research, wireframing, prototyping, and usability testing. Through interactive workshops and practical projects, participants will gain the expertise to craft effective user interfaces and enhance overall user experiences using industry-standard tools."
        },
        { 
            title: "Web Development", 
            description: "This track offers a comprehensive understanding of building dynamic and responsive websites. It covers front-end technologies like HTML, CSS, and JavaScript, alongside back-end tools such as Node.js, Express, and databases. Through coding sessions and projects, learners will develop the skills to build and deploy scalable full-stack web applications."
        },
        { 
            title: "Mobile Apps Development", 
            description: "Focusing on mobile platforms like Android and iOS, this track teaches app development using Java, Kotlin, Swift, and Dart. Practical projects and interactive sessions will equip learners with the ability to design, build, test, and deploy engaging and efficient mobile applications."
        },
        { 
            title: "Cloud Engineering", 
            description: "This track introduces cloud computing fundamentals, including AWS, Google Cloud, and Microsoft Azure. Learners will design, deploy, and manage scalable cloud infrastructures, gaining hands-on experience in cloud architecture, virtualization, containerization, and DevOps practices to ensure high availability and performance."
        },
        { 
            title: "Power Platform", 
            description: "This track explores Microsoft's Power Platform, including Power BI, Power Apps, Power Automate, and Power Virtual Agents. Participants will create custom business applications, automate workflows, and build chatbots with minimal coding. Practical projects will demonstrate how to integrate these tools to improve business processes and enable data-driven decision-making."
        }
    ];
    


interface TrackData {
    title: string;
    description: string;
}

interface TracksContainerProps extends TrackData {
    index: number;
}


function Tracks() {
    return ( 
        <div className="main-tracks-section">
    <TracksHero/>
    <div className="tracks-container">
    {trackData.map((track, index) => (
                    <TracksContainer key={index} index={index} {...track} />
                ))}
          </div>
          <ContactSection/>
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
 function TracksContainer({ title, description, index }: TracksContainerProps) {
    return (
    <div className="tracks-container-element">
 {index % 2 === 0 ? (
  <>
   <div className="tracks-image-section">
 <div className="tracks-image-wrapper">
   <img src={image1} alt={title} />
        </div>
   </div>
    <div className="tracks-text-image-section">
   <h1 className="tracks-title">{title}</h1>
   <p className="tracks-description">{description}</p>
     <div className="tracks-call-to-action">
     <button className="tracks-cta">Register To Join Track</button>
         </div>
 </div>
        </>
  ) : (
     <>
   <div className="tracks-text-image-section">
        <h1 className="tracks-title">{title}</h1>
        <p className="tracks-description">{description}</p>
   <div className="tracks-call-to-action">
       <button className="tracks-cta">Register To Join Track</button>
        </div>
    </div>
    <div className="tracks-image-section">
        <div className="tracks-image-wrapper">
       <img src={image1} alt={title} />
            </div>      </div>
                </>
            )}
        </div>
    );
}


export default Tracks;