import { FaLinkedin, FaGithub, FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import video from "../../assets/mutc-images/team.mp4"
import Image1 from "../../assets/mutc-images/user1.jpg"
import Image2 from "../../assets/mutc-images/user2.jpg"
import Image3 from "../../assets/mutc-images/user3.jpg"
import Image4 from "../../assets/mutc-images/user4.jpg"
import Image5 from "../../assets/mutc-images/user5.jpg"
import Image6 from "../../assets/mutc-images/user6.jpg"
import Image7 from "../../assets/mutc-images/user7.jpg"
import Image8 from "../../assets/mutc-images/user8.jpg"
import Image9 from "../../assets/mutc-images/user9.jpg"
import Image10 from "../../assets/mutc-images/user10.jpg"
import Image11 from "../../assets/mutc-images/user11.jpg"
 import FooterElement from "../../components/Footer/Footer";
import "./Leadership.css"


interface LeadershipContentsProps{
    Heading:string;
    Text:String;
    Video:string
}

interface CardProps {
    user: string;
    name: string;
    description: string;
    text: string;
    bio:string;
    title:string;
    socialLinks: {
        linkedin?: string;
        github?: string;
        twitter?: string;
        instagram?:string;
        facebook?:string;
    };
}
function Leadership() {
    return ( 
        <div className="leadership-parent-container">
           <LeadershipContents Heading="Meet the Team" Text='Mutc has dedicated software developes committed to success' Video={video}/> 
        <div className="leadership-section-cards">
            <div className="cards">
            < CardComponent 
                name="Dr. John Ndia"
                user={Image1}
                title="Patron"
                description=" Dean, SCIT"
                text="Innovation & Creativity"
                 bio="Dr. John Ndia is a senior lecturer and the Dean, School of Computing and Information Technology, Murang'a University of Technology (MUT)."
                 socialLinks={{
                    linkedin: "https://linkedin.com/in/DrNdia",
                    twitter: "https://twitter.com/DrNdia",
                    facebook:"https://facebook.com/DrNdia"
                    
                }}
            />
            < CardComponent 
                user={Image2}
                name="Victory Njeri"
                title='Chair Person'
                description="Chair Person"
                text="Visionary, Empowering, Dedicated"
                 bio="Fullstack Developer at MUT, passionate about building seamless digital experiences from front to back."
                 socialLinks={{
                    linkedin: "https://linkedin.com/in/johndoe",
                    twitter: "https://github.com/johndoe",
                    facebook:"/",
                    instagram:"/"
                }}
            />
            < CardComponent 
    user={Image3}
    name="Allan Muhari"
    title='Vice Chairperson'
    description="Vice Chairperson"
    text="Supportive, Strategic, Reliable"
    bio="Software enthusiast at MUT with a focus on leadership and team collaboration."
    socialLinks={{
        linkedin: "https://linkedin.com/in/allanmuhari",
        twitter: "https://twitter.com/allanmuhari"
    }}
/>

< CardComponent 
    user={Image4}
    name="Bridget Gitonga"
    title='Secretary'
    description="Secretary"
    text="Organized, Efficient, Detail-oriented"
    bio="Dedicated secretary at MUT, ensuring smooth communication and effective record-keeping."
    socialLinks={{
        linkedin: "https://linkedin.com/in/bridgetgitonga",
        twitter: "https://twitter.com/bridgetgitonga"
    }}
/>

< CardComponent 
    user={Image5}
    name="Ruth Mutisya"
    title='Treasurer'
    description="Treasurer"
    text="Trustworthy, Accountable, Focused"
    bio="Managing club finances with precision and responsibility."
    socialLinks={{
        linkedin: "https://linkedin.com/in/ruthmutisya",
        instagram: "https://instagram.com/ruthmutisya"
    }}
/>

< CardComponent 
    user={Image6}
    name="Webster Ifedha"
    title='Cyber Security Lead'
    description="Cyber Security Lead"
    text="Proactive, Analytical, Diligent"
    bio="Committed to ensuring the club's digital security at MUT."
    socialLinks={{
        linkedin: "https://linkedin.com/in/websterifedha",
        twitter: "https://twitter.com/websterifedha",
        facebook: "/",
        instagram: "/"
    }}
/>

< CardComponent 
    user={Image7}
    name="Manase Gunga"
    title='UI/UX Lead'
    description="UI/UX Lead"
    text="Creative, Detail-oriented, User-focused"
    bio="Bringing intuitive and user-friendly designs to life at MUT."
    socialLinks={{
        linkedin: "https://linkedin.com/in/manasegunga",
        twitter: "https://twitter.com/manasegunga",
        facebook: "/",
        instagram: "/"
    }}
/>

< CardComponent 
    user={Image8}
    name="Carolyne Githenduka"
    title='Web Development Lead'
    description="Web Development Lead"
    text="Innovative, Collaborative, Goal-oriented"
    bio="Leading web development efforts to enhance digital platforms."
    socialLinks={{
        linkedin: "https://linkedin.com/in/carolynegithenduka",
        twitter: "https://twitter.com/carolynegithenduka",
        facebook: "/",
        instagram: "/"
    }}
/>

< CardComponent 
    user={Image9}
    name="Stanley Amunze"
    title='Mobile Apps Development Lead'
    description="Mobile Apps Development Lead"
    text="Innovative, Persistent, Practical"
    bio="Focused on building impactful mobile applications for diverse users."
    socialLinks={{
        linkedin: "https://linkedin.com/in/stanleyamunze",
        twitter: "https://twitter.com/stanleyamunze",
        facebook: "/",
        instagram: "/"
    }}
/>

< CardComponent 
    user={Image10}
    name="Paul Karanja"
    title='Cloud Engineering Lead'
    description="Cloud Engineering Lead"
    text="Cloud-focused, Reliable, Adaptive"
    bio="Driving the club's cloud infrastructure advancements."
    socialLinks={{
        linkedin: "https://linkedin.com/in/paulkaranja",
        twitter: "https://twitter.com/paulkaranja",
        facebook: "/",
        instagram: "/"
    }}
/>

< CardComponent 
    user={Image11}
    name="Evyonn Mbithe"
    title='Power Platform Lead'
    description="Power Platform Lead"
    text="Innovator, Dynamic, Supportive"
    bio="Empowering club members through Power Platform solutions."
    socialLinks={{
        linkedin: "https://linkedin.com/in/evyonnmbithe",
        twitter: "https://twitter.com/evyonnmbithe",
        facebook: "/",
        instagram: "/"
    }}
/>

        </div>
        </div>
        <FooterElement/>
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


function CardComponent({ user, name, description, text ,bio,socialLinks,title}: CardProps){
return(
    <div className="card">
            <div className="card-inner">
              
                <div className="card-front">
                <h3>{name}</h3>
                    <img src={user} alt="User" className="user-image" />
                    <p>{title}</p>
                </div>

             
                <div className="card-back">
                    <p>{description}</p>
                    <span>{text}</span>
                    <p className="bio">{bio}</p> 
                    <div className="social-icons">
                    {socialLinks.linkedin && (
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        )}
                        {socialLinks.instagram && (
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        )}
                         {socialLinks.facebook && (
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        )}
                        {socialLinks.twitter && (
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        )
                    }
                </div>
                </div>
            </div>
        </div>
)
}


export default Leadership;