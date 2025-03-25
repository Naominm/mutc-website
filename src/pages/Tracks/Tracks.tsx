import LeadershipContents from "../../components/Hero/Hero";
import ContactSection from "../../components/Form/Form";
import "./Tracks.css"
import "../Leadership/Leadership.css"
import video from "../../assets/mutc-images/team.mp4"
import image1 from "../../assets/mutc-images/hero1.jpg"


const trackData: TrackData[] = [
    { 
        title: "Cyber Security", 
        description: "Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks."
    },
    { 
        title: "UI/UX Design", 
        description: "Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications."
    },
    { 
        title: "Web Development", 
        description: "Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."
    },
    { 
        title: "Mobile Apps Development", 
        description: "Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets."
    },
    { 
        title: "Cloud Engineering", 
        description: "Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services."
    },
    { 
        title: "Power Platform", 
        description: "Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency."
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