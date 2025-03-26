
import CardContent from '../../components/card/Card'
import Testimony1 from '../../assets/mutc-images/user3.jpg'
import Testimony2 from '../../assets/mutc-images/user4.jpg'
import Testimony3 from '../../assets/mutc-images/user7.jpg'


import "./Testimonial.css"

function Testimonial() {
    return ( 
        <section className="testimonial-section">
            <TestimonialHeader/>
            <div className="testimony-elements">
            <CardContent 
    user={Testimony1} 
    name='Daniel Mwangi' 
    text='member' 
    description='The mentorship and support I received transformed my skills and boosted my confidence. I’m now thriving in my career thanks to their invaluable guidance.'
/>

<CardContent 
    user={Testimony2} 
    name='Faith Kamau' 
    text='member' 
    description='Their commitment to nurturing talent and providing practical skills made a significant difference in my career. I highly recommend their programs.'
/>

<CardContent 
    user={Testimony3} 
    name='Kevin Otieno' 
    text='member' 
    description='Joining their community was a game-changer. The hands-on experience and mentorship pushed me to excel in cloud technologies.'
/>

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


export default Testimonial;