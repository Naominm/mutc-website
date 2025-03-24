import iconImage from "../../assets/mutc-images/logo.png";
import "./Icon.css";

function Icon() {
  return <IconElement Image={iconImage} text="MUT TECH CLUB" />;
}
type IconProps={
  Image:string;
  text:string
}

function IconElement({ Image, text }:IconProps) {
  return (
    <div className="icon-container-element">
      <div className="image-container">
        <img src={Image} alt="" />
      </div>
      <div className="icon-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Icon;
