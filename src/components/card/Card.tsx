import "../../pages/Home/Testimonial.css"


interface CardContentProps{
    user:string;
    name:string;
    description:string;
    text:string;
}

function CardContent({user,name,description,text}:CardContentProps){
    return(
        <div className="parent-card-content">
            <div className="cards-content-container-element">
                <div className="card-content">
                    <div className="testimony-user-image-wrapper">
                        <img src={user} alt="" />
                    </div>
                    <h3 className="user-name">{name}</h3>
                    <p>{text}</p>
                    <p className="user-description">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardContent;