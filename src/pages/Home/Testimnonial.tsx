import Testimony1 from '../../assets/mutc-images/user3.jpg'
import Testimony2 from '../../assets/mutc-images/user4.jpg'
import Testimony3 from '../../assets/mutc-images/user5.jpg'


import "./Testimonial.css"

interface CardContentProps{
    user:string;
    name:string;
    description:string;
}
function Testimonial() {
    return ( 
        <section className="testimonial-section">
            <TestimonialHeader/>
            <div className="testimony-elements">
                <CardContent user={Testimony1} name='Victory Njeri' description='good'/>
                <CardContent user={Testimony1} name='Victory Njeri' description='good'/>
                <CardContent user={Testimony1} name='Victory Njeri' description='good'/>
            </div>
        </section>
     );
}
function TestimonialHeader(){
    return(
        <div className="testimony-header-content">
            <h2>What people say</h2>
        </div>
    )
}

function CardContent({user,name,description}:CardContentProps){
    return(
        <div className="parent-card-content">
            <div className="cards-content-container-element">
                <div className="card-content">
                    <div className="testimony-user-image-wrapper">
                        <img src={user} alt="" />
                    </div>
                    <h3 className="user-name">{name}</h3>
                    <p className="user-description">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;