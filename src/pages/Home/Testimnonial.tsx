
import CardContent from '../../components/card/Card'
import Testimony1 from '../../assets/mutc-images/user3.jpg'
import Testimony2 from '../../assets/mutc-images/user4.jpg'
import Testimony3 from '../../assets/mutc-images/user5.jpg'


import "./Testimonial.css"

function Testimonial() {
    return ( 
        <section className="testimonial-section">
            <TestimonialHeader/>
            <div className="testimony-elements">
                <CardContent user={Testimony2} name='Victory Njeri' text='chairperson' description='delivering cutting-edge services and unmatched expertise to meet the diverse needs'/>
                <CardContent user={Testimony2} name='Victory Njeri' text='chairperson' description='delivering cutting-edge services and unmatched expertise to meet the diverse needs'/>
                <CardContent user={Testimony3} name='Victory Njeri' text='chairperson' description='delivering cutting-edge services and unmatched expertise to meet the diverse needs'/>
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